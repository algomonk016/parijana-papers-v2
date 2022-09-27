import React, { useEffect, useState } from "react";
import { CircularProgress, Fab, Grid, TextField, Typography } from "@mui/material";
import { generateDropDownOptions, getStorageData, getWindowDimensions } from "@/utils";
import { DynamicForm } from '@/components';
import { College, Option, PDF } from "@/constants";
import { getCollegeById } from "@/service/college.service";
import { postDocumentData, uploadPdf } from "@/service/document.service";
import { Add, CheckCircleOutlineTwoTone, ErrorOutlineTwoTone } from '@mui/icons-material'

interface FormProps extends AddDocumentFormProps {
  collegeDetails: College,
  handleUploadStage: (stage: UploadStage) => void;
}
interface AddDocumentFormProps{
  hasDocumentData?: boolean,
  documentData?:PDF
}

interface Form {
  name: string;
  subject: string;
  pdfFor: Option;
  teacher: Option;
  year: number;
  sem: number;
  viewLink?: string;
  downloadLink?: string;
}

// type UploadStage = 'idle' | 'uploadingfile' | 'uploadingdetails' | 'success' | 'failure';
enum UploadStage {
  idle = 'Idle',
  uploadingfile = 'Uploading File',
  uploadingDetails = 'Uploading Details',
  success = 'Document Uploaded Successfully',
  failure = 'Something Went Wrong, Please try again'
}

const Form = (props: FormProps): JSX.Element => {
  const { collegeDetails, handleUploadStage, hasDocumentData, documentData  } = props;
  const { teachers, name, exams, id } = collegeDetails;

  const fields: any = [
    {
      id: "name",
      label: "File Name",
      placeholder: "CSE-S405 Mid",
      type: "text",
      validationType: "string",
      value: hasDocumentData? documentData.name: '',
      validations: [],
    },
    {
      id: "subCode",
      label: "Subject Code",
      placeholder: "CSE-S405",
      type: "text",
      validationType: "string",
      value: hasDocumentData? documentData.subCode: '',
      validations: [],
    },
    {
      id: "pdfFor",
      label: "PDF For",
      placeholder: "",
      type: "select",
      validationType: "",
      value:  hasDocumentData? {value:documentData.pdfFor , label:documentData.pdfFor} :'',
      validations: [],
      options: generateDropDownOptions(exams)
    },
    {
      id: "teacher",
      label: "Teacher",
      placeholder: "Teacher",
      type: "select",
      validationType: "",
      value: hasDocumentData? {value: documentData.teacher , label : documentData.teacher} : '',
      validations: [],
      options: generateDropDownOptions(teachers)
    },
    {
      id: "year",
      label: "Document Year",
      placeholder: "2019",
      type: "text",
      validationType: "string",
      value: hasDocumentData?documentData.year : '',
      validations: [],
    },
    {
      id: "sem",
      label: "Semester",
      placeholder: "7",
      type: "text",
      validationType: "string",
      value: hasDocumentData? documentData.sem : '',
      validations: [],
    }
  ]
  
  const [fileSelected, setFileSelected] = useState<any>(documentData);
 
  const onSubmit = async (data: Form) => {
    handleUploadStage(UploadStage.uploadingfile);

    const response = await uploadPdf(fileSelected);
    if (response.hasOwnProperty('error')) {
      handleUploadStage(UploadStage.failure);
      return;
    }

    data.year = Number(data.year);
    data.sem = Number(data.sem);

    const collegeId = id;
    const { viewLink } = response;
    const adminDetails = getStorageData('user', 'session');
    const uploaderDetails = {
      adminId: adminDetails.id
    }

    {/*  teacher, file name, year, document, view link, download link, pdfFor,  */ }
    let payload: any = { ...data, viewLink, downloadLink: viewLink, collegeId, ...uploaderDetails };
    payload.pdfFor = payload.pdfFor.value;
    payload.teacher = payload.teacher.value;
    handleUploadStage(UploadStage.uploadingDetails)
    postDocumentData(payload)
      .then((res: any) => {
        handleUploadStage(UploadStage.success)
      })
      .catch((error: any) => {
        handleUploadStage(UploadStage.failure)
      })
  }

  return (
    <Grid p={1}>
      <div style={{ padding: '6px' }}>
        <div className="label" style={{ fontWeight: 'bold', marginBottom: '7px' }}>College</div>
        <TextField style={{ margin: '0 0 5px 0' }} value={name} variant={'outlined'} size={'small'} fullWidth disabled />
        <Grid container my={2} justifyContent={'space-between'} alignItems={'center'} >
          <Grid item xs={4}>
            <label htmlFor="upload-pdf">
              <input id="upload-pdf" style={{ display: 'none' }} type={'file'} accept={'application/pdf'} onChange={e => setFileSelected(e.target.files[0])} />
              <Fab
                color={!!fileSelected ? "info" : "primary"}
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
              >
                <Add />
                <Typography color={'white'} variant="subtitle1">
                  {!!fileSelected ? 'Update' : 'Add'}  Document
                </Typography>
              </Fab>
            </label>
          </Grid>
          <Grid item xs={8}>
            {
              !!fileSelected && <Typography variant="subtitle1">{fileSelected.name}</Typography>
            }
          </Grid>
        </Grid>
      </div>
      <DynamicForm
        formFields={fields}
        onSubmit={onSubmit}
        onReset={() => { }}
        showReset
        removeField={() => { }}
      />
    </Grid>
  )
}

const AddDocumentForm = (props:AddDocumentFormProps): JSX.Element => {
  const { height } = getWindowDimensions();
  const { collegeId } = getStorageData('user', 'session')
  const [collegeDetails, setCollegeDetails] = useState<College>()
  const [hasFetchedDetails, setHasFetchedDetails] = useState<boolean>(false)
  useEffect(() => {
    getCollegeById(collegeId)
      .then((clg: College) => {
        setCollegeDetails(clg)
        setHasFetchedDetails(true)
      })
  }, [])

  const [uploadStage, setUploadStage] = useState<UploadStage>(UploadStage.idle)
  const [isUploading, setIsUploading] =useState<boolean>(false);
  const handleUploadStage = (stage: UploadStage): void => {
    setUploadStage(stage)
    if (stage !== UploadStage.success && stage !== UploadStage.failure) {
      setIsUploading(true);
    } else{
      setTimeout(() => {
        setIsUploading(false);
      }, 1000)
    } 
  }

  if(isUploading) {
    return (
    <Grid container direction={'column'}>
      <Grid item mx={'auto'} my={3} >
        {
          uploadStage === UploadStage.success ? 
            <CheckCircleOutlineTwoTone fontSize="large" color="success" /> : 
            (
              uploadStage === UploadStage.failure ? 
                <ErrorOutlineTwoTone fontSize="large" color="error" /> : 
                <CircularProgress size={'3rem'} color="primary"  />
            )
        }
      </Grid>
      <Grid item mx={'auto'} mb={3} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} >
        <Typography variant="h5" >{ uploadStage }</Typography>
        <Typography fontSize={10} variant="caption">*Do not close the modal</Typography>
      </Grid>
    </Grid>
    )
  }

  return (
    <Grid minHeight={height * 0.7}>
      {
        hasFetchedDetails ? <Form {...props} collegeDetails={collegeDetails} handleUploadStage={handleUploadStage} /> : <h1>Loading....</h1>
      }
    </Grid >
  )
}

export default AddDocumentForm;