import React, { useContext } from 'react'
import Divider from '@mui/material/Divider'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LogOutIcon from '@mui/icons-material/Logout'
import List from '@mui/material/List'
import MuiDrawer from '@mui/material/Drawer'
import DrawerHeaderComponent from '@presentation/pages/dashboard/components/drawer-main/components/drawer-header'
import { Box, Typography } from '@mui/material'
import { menu_options } from '@presentation/pages/dashboard/components/constants/menu-options'
import { drawerWidth } from '@presentation/pages/dashboard/components/constants/menu-options'
import { useNavigate } from "react-router-dom";
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'
import { AuthenticationManageContext } from '@presentation/pages/authentication/context/authentication-context'

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

type Props = {
  open: boolean
  onClick: () => void
}

function DrawerMain({ open = false, onClick }: Props) {
  const navigate = useNavigate()
  const { handleLogOut } = useContext(AuthenticationManageContext)

  const logOut = () => {
    handleLogOut()
    navigate('/')
  }
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeaderComponent
        onClick={onClick}
        title={'Selección de emprendedores'}
      />
      <Divider />
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <List>
            {menu_options.map((text, index) => (
              <ListItem
                key={text.title}
                disablePadding
                sx={{ display: 'block' }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => navigate(`${text.to}`)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {<text.icon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography component="h6" variant="h6" style={{fontSize: 14}}>{text.title}</Typography>}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={logOut}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LogOutIcon />
                </ListItemIcon>
                <ListItemText
                  primary={'Cerrar Sesión'}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Drawer>
  )
}

export default DrawerMain
