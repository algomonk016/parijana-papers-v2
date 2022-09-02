import { useRef, useState } from 'react';

import NextLink from 'next/link';

import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  lighten,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography
} from '@mui/material';

import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);

const profileImageURL = 'data:image/jpeg;base64,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'

function HeaderUserbox() {
  const user = {
    name: 'Shivesh Tiwari',
    avatar: profileImageURL,
    jobtitle: 'Software Engineer'
  };

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar variant="rounded" alt={user.name} src={user.avatar} />
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.jobtitle}
            </UserBoxDescription>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuUserBox sx={{ minWidth: 210 }} display="flex">
          <Avatar variant="rounded" alt={user.name} src={user.avatar} />
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.jobtitle}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider sx={{ mb: 0 }} />
        <List sx={{ p: 1 }} component="nav">
          <NextLink href="/management/profile" passHref>
            <ListItem button>
              <AccountBoxTwoToneIcon fontSize="small" />
              <ListItemText primary="My Profile" />
            </ListItem>
          </NextLink>
          <NextLink href="/applications/messenger" passHref>
            <ListItem button>
              <InboxTwoToneIcon fontSize="small" />
              <ListItemText primary="Messenger" />
            </ListItem>
          </NextLink>
          <NextLink href="/management/profile/settings" passHref>
            <ListItem button>
              <AccountTreeTwoToneIcon fontSize="small" />
              <ListItemText primary="Account Settings" />
            </ListItem>
          </NextLink>
        </List>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button color="primary" fullWidth>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Sign out
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderUserbox;
