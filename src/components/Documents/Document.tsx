import React from "react";
import { PDF } from "@/constants";
import { Typography } from "@mui/material";
import Image from 'next/image';

interface Props {
  data: PDF
}

const Document = (props: Props): JSX.Element => {

  const { subCode, year, teacher, name, pdfFor } = props.data;

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      margin: '1px 10px',
      minWidth: '200px'
    }} >
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Image
          src="/static/images/placeholders/logo/document.jpg"
          alt={name}
          width={150}
          height={150}
        />
      </div>
      <div style={{
        padding: '10px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography> {name} </Typography>
          <Typography> {pdfFor} </Typography>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography> {subCode} </Typography>
          <Typography> {year} </Typography>
        </div>
        <Typography> {teacher} </Typography>
      </div>
    </div>
  )
}

export default Document;