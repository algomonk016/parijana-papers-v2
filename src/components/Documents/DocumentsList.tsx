import { PDF } from '@/constants';
import { TypographyH2 } from '@/styles/styles';
import { Container } from '@mui/material';
import React from 'react';
import Document from './Document';

interface Props{
  title: string;
  documents: PDF[]
}

const DocumentsList = (props: Props): JSX.Element => {
  const { title, documents } = props;

  return (
    <Container style={{
      marginBottom: '20px',
    }}>
      <TypographyH2 my={2} >{title}</TypographyH2>

      <div style={{ overflowX: 'scroll', display: 'flex', paddingBottom: '20px' }}  >
        {
          documents.map((document: PDF) => {
            const { id } = document;
            return (
              <Document key={id} data = {document}  />
            )
          })
        }
      </div>
    </Container>
  )
}

export default DocumentsList;