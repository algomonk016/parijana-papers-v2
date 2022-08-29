import React, { MouseEventHandler, MutableRefObject, ReactNode } from 'react';
import { ListItem } from '@mui/material';
import { Link } from '@/components/'

interface Props {
  href?: string;
  onClick?: MouseEventHandler<HTMLLIElement>;
  children: ReactNode;
  ref?: MutableRefObject<any>;
}

const NavItem: React.FC<Props> = (props: Props): JSX.Element => {
  const { href, children } = props;
  // if (ref) {
  //   return (
  //     <ListItem
  //       classes={{ root: 'MuiListItem-indicators' }}
  //       button
  //       ref={ref}
  //       onClick={onClick}
  //     >
  //       {children}
  //     </ListItem>

  //   )
  // }
  return (
    <ListItem
      classes={{ root: 'MuiListItem-indicators' }}
      button
      component={Link}
      href={href}
    >
      {children}
    </ListItem>
  )
}

export default NavItem