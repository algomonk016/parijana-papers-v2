import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { getDocuments } from "src/dummyBackend/document.service";

const Documents = (): JSX.Element => {
  useEffect(() => {
    getDocuments()
    .then((res: any) => {
      const { data } = res;
    })
  }, [])
  return (
    <Grid>
      this is document
    </Grid>
  )
}

export default Documents