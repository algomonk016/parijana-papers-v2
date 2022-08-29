import {
  Box,
  List,
  styled
  // ListItem, ListItemText, Menu, MenuItem,
} from '@mui/material';
import { NavItem, NavItemText } from '@/components/Navbar'
// import { useRef, useState } from 'react';
// import Link from 'src/components/Link';
// import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const ListWrapper = styled(Box)(
  ({ theme }) => `
    .MuiTouchRipple-root {
      display: none;
    }

    .MuiListItem-root {
      transition: ${theme.transitions.create(['color', 'fill'])};
      
      &.MuiListItem-indicators {
          padding: ${theme.spacing(1, 2)};
      
          .MuiListItemText-root {
              .MuiTypography-root {
                  &:before {
                      height: 4px;
                      width: 22px;
                      opacity: 0;
                      visibility: hidden;
                      display: block;
                      position: absolute;
                      bottom: -10px;
                      transition: all .2s;
                      border-radius: ${theme.general.borderRadiusLg};
                      content: "";
                      background: ${theme.colors.primary.main};
                  }
              }
        
          &.active,
          &:active,
          &:hover {
          
              background: transparent;
          
              .MuiListItemText-root {
                  .MuiTypography-root {
                      &:before {
                          opacity: 1;
                          visibility: visible;
                          bottom: 0px;
                      }
                  }
              }
          }
      }
    }
`
);

function HeaderMenu() {
  // const ref = useRef<any>(null);
  // const [isOpen, setOpen] = useState<boolean>(false);

  // const handleOpen = (): void => {
  //   setOpen(true);
  // };

  // const handleClose = (): void => {
  //   setOpen(false);
  // };

  return (
    <>
      <ListWrapper
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
        <List disablePadding component={Box} display="flex">
          <NavItem href='/' >
            <NavItemText label='Home' />
          </NavItem>
          <NavItem href='/documents' >
            <NavItemText label='Documents' />
          </NavItem>
          <NavItem href='/projects' >
            <NavItemText label='Projects' />
          </NavItem>

          {/* dropdown buttons */}
          {/* <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  Others
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem> */}
        </List>
      </ListWrapper>

      {/* Options for dropdown menu */}
      {/* <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem sx={{ px: 3 }} component={Link} href="/">
          Overview
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/components/tabs">
          Tabs
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/components/cards">
          Cards
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={Link} href="/components/modals">
          Modals
        </MenuItem>
      </Menu> */}
    </>
  );
}

export default HeaderMenu;
