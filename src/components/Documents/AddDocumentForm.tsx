import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Select from 'react-select';
import { generateDropDownOptions, getWindowDimensions } from "@/utils";
import { DynamicForm } from '@/components';

const collegeOptions = [
  {
    label: 'college1',
    value: 'college1'
  },
  {
    label: 'college2',
    value: 'college2'
  },
  {
    label: 'college3',
    value: 'college3'
  },
  {
    label: 'college4',
    value: 'college4'
  },
  {
    label: 'college5',
    value: 'college5'
  },

]

const pdfFor = [
  {
    label: 'Mid1',
    value: 'mid1'
  },
  {
    label: 'Mid2',
    value: 'mid2'
  },
  {
    label: 'End',
    value: 'end'
  },
  {
    label: 'Practical',
    value: 'practical'
  },
]

const teachers = [
  {
    label: 'Teacher1',
    value: 'teacher1'
  },
  {
    label: 'Teacher2',
    value: 'teacher2'
  },
  {
    label: 'Teacher3',
    value: 'teacher3'
  },
  {
    label: 'Teacher4',
    value: 'teacher4'
  },
]

const AddDocumentForm = (): JSX.Element => {
  const { height } = getWindowDimensions();
  useEffect(() => { }, [])

  {/*  teacher, file name, year, document, view link, download link, pdfFor,  */ }
  const fields: any = [
    {
      id: "fileName",
      label: "File Name",
      placeholder: "File Name",
      type: "text",
      validationType: "string",
      value: '',
      validations: [],
    },
    {
      id: "subject",
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
      options: pdfFor
    },
    {
      id: "teacher",
      label: "Teacher",
      placeholder: "Teacher",
      type: "select",
      validationType: "",
      value: '',
      validations: [],
      options: teachers
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
    },
    {
      id: "document",
      label: "Upload File",
      placeholder: "",
      type: "upload",
      validationType: "",
      value: '',
      validations: [],
    },
  ]

  return (
    <Grid minHeight={height*0.7}>
      <Grid p={1}>
        <div style={{padding: '6px'}}>
          <div className="label" style={{ fontWeight: 'bold' }}>College</div>
          <Select
            options={collegeOptions}
            placeholder={'select college'}
          />
        </div>
        <DynamicForm
          formFields={fields}
          onSubmit={(e: any) => console.log('submitted', e)}
          onReset={() => { }}
          showReset
          removeField={() => { }}
        />
      </Grid>
    </Grid>
  )
}

export default AddDocumentForm;