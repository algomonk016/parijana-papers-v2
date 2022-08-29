import React, { ReactNode } from 'react';
import { ListItemText } from '@mui/material';

interface Props {
  label: string | ReactNode;
}

const NavItemText: React.FC<Props> = (props: Props): JSX.Element => {
  const { label } = props;
  return (
    <ListItemText
      primaryTypographyProps={{ noWrap: true }}
      primary={label}
    />
  )
}

export default NavItemText