import { postCollege } from "@/service/college.service";
import React from "react";
import { useRouter } from "next/router";
import { DynamicForm } from "@/components";

const AddCollege = (): JSX.Element => {
  const fields: any = [
    {
      id: "name",
      label: "College Name",
      placeholder: "College name",
      type: "text",
      validationType: "string",
      value: '',
      validations: [],
    },
    {
      id: "exams",
      label: "Exams",
      placeholder: "Comma separated list Ex: End Sem, Mid Sem, Quiz",
      type: "text",
      validationType: "string",
      value: '',
      validations: [],
    },
    {
      id: "teachers",
      label: "Teachers",
      placeholder: "Comma separated list Ex: End Sem, Mid Sem, Quiz",
      type: "text",
      validationType: "string",
      value: '',
      validations: [],
    }
  ]
  const router = useRouter();

  const handleSubmit = (e: any) => {
    let { name, exams, teachers } = e;

    exams = exams.split(',');
    exams = exams.map((exam: string) => exam.trim());

    teachers = teachers.split(',');
    teachers = teachers.map((exam: string) => exam.trim());

    const payload = {
      name, exams, teachers
    }
    
    postCollege(payload)
    .then(() => {
      // TODO: Update me later
      if(window.confirm('add another college?')){
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
        removeField={() => { }}/>
    </div>
  )
}

export default AddCollege;