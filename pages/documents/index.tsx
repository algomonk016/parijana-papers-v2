import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getDocuments } from "src/dummyBackend/document.service";
import { DocumentsList } from 'src/components';
import { PDF } from "@/constants";

interface DocumentsResponse{
  data: PDF[]
}

const Documents = (): JSX.Element => {
  const [documents, setDocuments] = useState<PDF[]>([]);
  useEffect(() => {
    getDocuments()
    .then((res: DocumentsResponse) => {
      const { data } = res;
      setDocuments(data)
    })
  }, [])
  return (
    <Grid>
      {/* display exam wise to the student */}
      <DocumentsList title="mid1" documents={documents} />
      <DocumentsList title="mid2" documents={documents} />
      <DocumentsList title="end" documents={documents} />
    </Grid>
  )
}

export default Documents