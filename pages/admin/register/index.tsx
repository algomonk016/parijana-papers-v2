import { DynamicForm } from "@/components";
import { Option, College } from "@/constants";
import { useRouter } from 'next/router';
import { getColleges } from "@/service/college.service";
import { postAdmin } from "@/service/user.service";
import { generateDropDownOptions } from "@/utils";
import React, { useEffect, useState } from "react";

const RegisterAdmin = (): JSX.Element => {

  // const [areCollegeOptionsLoading, setAreCollegeOptionsLoading] = useState<boolean>(true);
  const [collegeOptions, setCollegeOptions] = useState<Option[]>([]);
  const router = useRouter();
  useEffect(() => {
    getColleges()
      .then((colleges: College[]) => {
        setCollegeOptions(generateDropDownOptions(colleges))
      })
      .catch((err: any) => {
        alert(err);
      })
      .finally(() => {
        // setAreCollegeOptionsLoading(false);
      })
  }, [])

  const fields: any = [
    {
      id: "name",
      label: "Name",
      placeholder: "Full Name",
      type: "text",
      validationType: "string",
      value: '',
      validations: [],
    },
    {
      id: "userId",
      label: "Unique Id",
      placeholder: "User Id",
      type: "text",
      validationType: "string",
      value: '',
      validations: [],
    },
    {
      id: "password",
      label: "Password",
      placeholder: "Password",
      type: "text",
      validationType: "string",
      value: '',
      validations: [],
    },
    {
      id: "college",
      label: "College",
      placeholder: "College",
      type: "select",
      validationType: "",
      value: '',
      validations: [],
      options: collegeOptions
    },
  ]

  const handleSubmit = (e: any) => {
    const { name, userId, college, password } = e;
    const collegeId = college.value;

    const payload = {
      name, userId, collegeId, password
    }
    
    postAdmin(payload)
    .then(() => {
      // TODO: Update me later
      if(window.confirm('add another admin?')){
        router.reload();
      }
    })
  }

  return (
    <div>
      <DynamicForm 
        formFields={fields}
        onSubmit={handleSubmit}
        onReset={() => { }}
        showReset
        removeField={() => { }}
      />
    </div>
  )
}

export default RegisterAdmin;