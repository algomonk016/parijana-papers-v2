import React, { memo, useEffect } from "react";
import { Formik } from "formik";
import * as yup from 'yup'
import { createYupSchema } from '@/utils/yupSchemaCreator'
import Field from "./fields";
import { Button, IconButton } from "@mui/material";
import { Done, DeleteOutline } from "@mui/icons-material";

const FormikApp = ({
  formFields = [],
  onSubmit,
  onReset,
  initialValues = {},
  filter = false,
  showReset = false,
  showFormikReset = false,
  removeField
}) => {

  const init = initialValues
  formFields.forEach(item => {
    init[item.id] = item.value || "";
  })

  const yupSchema = formFields.reduce(createYupSchema, {})
  const validateSchema = yup.object().shape(yupSchema)

  return (
    <Formik
      initialValues={init}
      validationSchema={validateSchema}
      onSubmit={onSubmit}
      onReset={() => { }}
      validateOnBlur
    >
      {formikProps => (
        <form onSubmit={formikProps.handleSubmit}>
          {filter ?
            <>
              <Field fields={formFields} formikProps={formikProps} />
              <IconButton type="submit" ><Done sx={{ border: 1, borderRadius: '100%' }} color="success" /></IconButton>
              {showReset && <IconButton onClick={removeField}>
                <DeleteOutline style={{ border: '1px solid red', borderRadius: '100%', padding: '1px' }} color="error" />
              </IconButton>}
              {showFormikReset && <IconButton onClick={() => { formikProps.resetForm(); onReset() }}>
                <DeleteOutline style={{ border: '1px solid red', borderRadius: '100%', padding: '1px' }} color="error" />
              </IconButton>}
            </> :
            <>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                <Field fields={formFields} formikProps={formikProps} />
              </div>
              <Button type="submit" color="success" variant="contained" >Submit</Button>
            </>
          }
          {/* <button
            style={{
              margin: '0 5px 5px 5px',
              padding: '5px 10px',
            }}
            onClick={formikProps.resetForm}
            type="reset" 
            >Reset</button> */}
        </form>
      )
      }
    </Formik>
  )
}

export default memo(FormikApp)