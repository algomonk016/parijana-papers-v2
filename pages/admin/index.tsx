import { PDF } from "@/constants";
import { getDocuments } from "@/dummyBackend/document.service";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  PostAddTwoTone,
  // ReviewsTwoTone
} from "@mui/icons-material";
import { AddDocumentForm, DocumentsTable } from '@/components'
import Modal from "@/components/modals";

const Admin = (): JSX.Element => {
  const [documents, setDocuments] = useState<PDF[]>([]);
  useEffect(() => {
    getDocuments()
      .then((res: PDF[]) => {
        setDocuments(res)
      })
  }, [])

  return (
    <div>
      <Container>
        {/* documents/uploads */}

        <div>
          <Grid display={'flex'} justifyContent={'space-between'} >
            <Typography variant="h4">Recently Uploaded Documents</Typography>
            <div>
              <Modal
                title="Upload"
                text={<PostAddTwoTone color="success" />}
                content={<AddDocumentForm />}
                icon
              />
            </div>
          </Grid>

          <DocumentsTable documents={documents} />
        </div>

        {/* reviews */}
        {/* <div>
          <Grid display={'flex'} justifyContent={'space-between'} >
            <span>Recent Reviews</span>
            <IconButton onClick={() => alert('show all reviews')} >Show All</IconButton>
          </Grid>
        </div> */}
      </Container>

      {/* <CollegeDetails /> */}
    </div>
  )
}

export default Admin;