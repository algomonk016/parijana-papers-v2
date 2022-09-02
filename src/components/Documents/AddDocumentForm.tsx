import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Select from 'react-select';
import { generateDropDownOptions } from "@/utils";
import { DynamicForm } from '@/components';

const AddDocumentForm = (): JSX.Element => {

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

  useEffect(() => {

  }, [])

  {/* college, sem, subject, teacher, file name, year, document, view link, download link, pdfFor,  */}
  const fields: any = [
    {
      id: "college",
      label: "College",
      placeholder: "College",
      type: "select",
      validationType: "",
      value:'',
      validations: [],
      options: collegeOptions
    },
    {
      id: "sem",
      label: "Semester",
      placeholder: "Semester",
      type: "text",
      validationType: "string",
      value:'',
      validations: [],
    },
  ]

  return (
    <Box>
      <Grid>
        <DynamicForm
          formFields={fields}
          onSubmit={(e: any) => console.log('submitted', e)}
          onReset={() => {}}
          filter={true}
          showReset
          removeField = {() => {}}
        />
      </Grid>
    </Box>
  )
}

export default AddDocumentForm;