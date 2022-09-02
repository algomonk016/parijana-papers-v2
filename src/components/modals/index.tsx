import SidebarLayout from '@/layouts/SidebarLayout';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  // Container, Grid,
  Divider,
  IconButton
} from '@mui/material';
import {
  Button,
  DialogTitle,
  Dialog,
  // Typography 
} from '@mui/material'

interface ModalProps {
  title: string,
  text: React.ReactNode,
  content: React.ReactNode,
  icon: boolean
}

interface Dialog {
  onClose: () => void,
  open: boolean,
  title: string,
  children: React.ReactNode
}

const SimpleDialog: React.FunctionComponent<Dialog> = props => {
  const { onClose, open, children, title } = props;

  return (
    <Dialog onClose={onClose} open={open} fullWidth>
      <DialogTitle fontSize={20} textAlign={'center'}>{title}</DialogTitle>
      <Divider />
      {children}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function Modal(props: ModalProps) {
  const { text, content, title, icon } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <span>
        {
          icon ? <IconButton onClick={handleClickOpen}> {text} </IconButton> : <Button onClick={handleClickOpen}> {text} </Button>
        }
      </span>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        title={title}
      >
        {content}
      </SimpleDialog>
    </>
  );
}

Modal.getLayout = (page: any) => <SidebarLayout>{page}</SidebarLayout>;

export default Modal;
