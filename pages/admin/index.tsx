import { PDF } from "@/constants";
import { getDocuments } from "@/dummyBackend/document.service";
import { Grid, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  EditTwoTone,
  DeleteTwoTone,
  PostAddTwoTone,
  // ReviewsTwoTone
} from "@mui/icons-material";
import { AddDocumentForm } from '@/components'
import Modal from "@/components/modals";

interface DocumentsResponse {
  data: PDF[]
}

const Admin = (): JSX.Element => {
  const [documents, setDocuments] = useState<PDF[]>([]);
  useEffect(() => {
    getDocuments()
      .then((res: DocumentsResponse) => {
        const { data } = res;
        setDocuments(data)
      })
  }, [])

  return (
    <div>
      <Container>
        {/* documents/uploads */}

        <div>
          <Grid display={'flex'} justifyContent={'space-between'} >
            <span>Recently Uploaded Documents</span>
            <div>
              <Modal
                title="Upload"
                text={<PostAddTwoTone color="success" />}
                content={<AddDocumentForm />}
                icon
              />
              <button onClick={() => alert('show all')} >All Uploads</button>
            </div>
          </Grid>

          <div>
            {
              documents.map((document: PDF): JSX.Element => {
                const { id, fileName, subcode, rating } = document;
                return (
                  <div key={id} style={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                  }} >
                    <span>{id}</span>
                    <span>{subcode}</span>
                    <span>{fileName}</span>
                    <span>{rating}</span>
                    <span style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }} >
                      <Modal
                        title="Edit"
                        text={<EditTwoTone color="primary" />}
                        content={<Grid>this should be the modal content</Grid>}
                        icon
                      />
                      <Modal
                        title="Delete"
                        text={<DeleteTwoTone color='error' />}
                        content={<Grid>this should be the modal content</Grid>}
                        icon
                      />
                    </span>
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* reviews */}
        <div>
          <Grid display={'flex'} justifyContent={'space-between'} >
            <span>Recent Reviews</span>
            <IconButton onClick={() => alert('show all reviews')} >Show All</IconButton>
          </Grid>
        </div>
      </Container>

    </div>
  )
}

export default Admin;