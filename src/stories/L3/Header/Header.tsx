import React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export interface IHeaderProps {

  /**
   * コンテンツ
   */
  children: React.ReactNode;
}

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width     : drawerWidth,
  transition: theme.transitions.create('width', {
    easing  : theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing  : theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX                   : 'hidden',
  width                       : '0px'
});

// ヘッダーを浮かせているので、コンテンツ領域をその分下に下げるための余白
const DrawerHeader = styled('div')(({ theme }) => ({
  display       : 'flex',
  alignItems    : 'center',
  justifyContent: 'flex-end',
  padding       : theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...(theme.mixins.toolbar as any)
}));

// eslint-disable-next-line @typescript-eslint/naming-convention
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

// ヘッダー
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex    : theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing  : theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width     : `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing  : theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width     : drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing : 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

/**
 * ヘッダー
 */
export const Header = (props: IHeaderProps): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = (): void => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginLeft: '-8px'
            }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ paddingLeft: 3 }}>
            RecipeSurvey
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader />
        <Divider />
        {/* <SideMenu /> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  );
};
