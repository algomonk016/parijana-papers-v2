import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { generateDropDownOptions, getStorageData, getWindowDimensions } from "@/utils";
import { DynamicForm } from '@/components';
import { College, Option } from "@/constants";
import { getCollegeById } from "@/service/college.service";
import { postDocumentData, uploadPdf } from "@/service/document.service";

interface FormProps {
  collegeDetails: College
}

interface Form{
  name: string;
  subject: string;
  pdfFor: Option;
  teacher: Option;
  year: number;
  sem: number;
  viewLink?: string;
  downloadLink?: string;
}

type UploadStage = 'idle' | 'uploadingfile' | 'uploadingdetails' | 'success' | 'failure';

const Form = (props: FormProps): JSX.Element => {
  const { teachers, name, exams, id } = props.collegeDetails;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fields: any = [
    {
      id: "name",
      label: "File Name",
      placeholder: "File Name",
      type: "text",
      validationType: "string",
      value: '',
      validations: [],
    },
    {
      id: "subCode",
      label: "Subject Code",
      placeholder: "Subject Code",
      type: "text",
      validationType: "string",
      value: '',
      validations: [],
    },
    {
      id: "pdfFor",
      label: "PDF For",
      placeholder: "PDF For",
      type: "select",
      validationType: "",
      value: '',
      validations: [],
      options: generateDropDownOptions(exams)
    },
    {
      id: "teacher",
      label: "Teacher",
      placeholder: "Teacher",
      type: "select",
      validationType: "",
      value: '',
      validations: [],
      options: generateDropDownOptions(teachers)
    },
    {
      id: "year",
      label: "Year",
      placeholder: "Year",
      type: "text",
      validationType: "string",
      value: '',
      validations: [],
    },
    {
      id: "sem",
      label: "Semester",
      placeholder: "Semester",
      type: "text",
      validationType: "string",
      value: '',
      validations: [],
    }
  ]

  const [fileSelected, setFileSelected] = useState<any>();

  const onSubmit = async (data: Form) => {
    handleUploadStage('uploadingfile');

    const response = await uploadPdf(fileSelected);
    if(response.hasOwnProperty('error')){
      handleUploadStage('failure');
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
    handleUploadStage('uploadingdetails')
    postDocumentData(payload)
      .then((res: any) => {
        console.log('res', res)
      })

  }

  const handleUploadStage = (stage: UploadStage): void => {
    if(stage !== 'success' && stage !== 'failure'){
      setIsLoading(true);
    } else{
      setIsLoading(false);

      if(stage === 'failure'){
        alert('something went wrong');
      } else{
        alert('success');
      }

    }
  }

  return (
    <Grid p={1}>
      <div style={{ padding: '6px' }}>
        <div className="label" style={{ fontWeight: 'bold', marginBottom: '7px' }}>College</div>
        <TextField value={name} variant={'outlined'} size={'small'} fullWidth disabled />
        <input type={'file'} accept={'application/pdf'}  onChange = { e => setFileSelected(e.target.files[0])}  />
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

const AddDocumentForm = (): JSX.Element => {
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

  return (
    <Grid minHeight={height * 0.7}>
      {
        hasFetchedDetails ? <Form collegeDetails={collegeDetails} /> : <h1>Loading....</h1>
      }
    </Grid >
  )
}

export default AddDocumentForm;