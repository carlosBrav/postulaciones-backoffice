import * as React from 'react'
import Box from '@mui/material/Box'

import CssBaseline from '@mui/material/CssBaseline'
import { Outlet } from 'react-router-dom'
import AppBarComponent from '@presentation/pages/dashboard/components/app-bar-main'
import DrawerMainComponent from '@presentation/pages/dashboard/components/drawer-main'
import {DrawerHeader} from '@presentation/pages/dashboard/components/drawer-main/components/drawer-header'
import {useNavigate} from 'react-router-dom'
import { AuthenticationManageContext } from '../authentication/context/authentication-context'

export default function MainComponent() {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()
  const { isAuthenticated } = React.useContext(AuthenticationManageContext)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  React.useEffect(()=>{
    if(!isAuthenticated){
      navigate("/")
    }
  },[isAuthenticated])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarComponent
        onClick={handleDrawerOpen}
        open={open}
        title={'¡Bienvenido!'}
      />
      <DrawerMainComponent onClick={handleDrawerClose} open={open}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  )
}
