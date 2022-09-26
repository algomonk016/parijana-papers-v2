import { IconButton } from "@mui/material";
import { DeleteTwoTone, EditTwoTone, RemoveRedEyeTwoTone } from '@mui/icons-material';
import React from "react";
import Modal from "@/components/modals";
import { PDF } from "@/constants";
import { AddDocumentForm } from "@/components";

interface EditDocumentProps {
  data: PDF;
}

const EditDocument = (props: EditDocumentProps): JSX.Element => {
  const { data } = props;
  
  return (
    <div>
      <AddDocumentForm  documentData={data} hasDocumentData />
    </div>
  )
}

const DeleteDocument = (props: {id: string}): JSX.Element => {
  const {id} = props;

  return (
    <div>
      Delete form {id}
    </div>
  )
}


const ButtonCellRendererForDocumentsTable = (props: any): JSX.Element => {
  const { data } = props;
  const openDocument = (): void => {
    window.open(data.viewLink)
  }

  return (
    <div>
      <IconButton onClick={openDocument} > <RemoveRedEyeTwoTone color="action" /> </IconButton>
      <Modal
        title="Edit"
        text={<EditTwoTone color="primary" />}
        content={<EditDocument data={data} />}
        icon
      />
      <Modal
        title="Delete"
        text={<DeleteTwoTone color='error' />}
        content={<DeleteDocument id={data.id} />}
        icon
      />
    </div>
  )
}

export default ButtonCellRendererForDocumentsTable;