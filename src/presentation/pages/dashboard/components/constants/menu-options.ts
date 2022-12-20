import DashboardIcon from '@mui/icons-material/Dashboard'
import ManageAcoountsIcon from '@mui/icons-material/ManageAccounts'
import SettingIcon from '@mui/icons-material/Settings'
import AssesmentIcon from '@mui/icons-material/Assessment'

export const menu_options = [
  {title: 'Gestión de Perfiles', icon: DashboardIcon, to: 'manage-profiles'},
  {title: 'Gestión de Usuarios', icon: ManageAcoountsIcon, to: 'manage-users'},
  {title: 'Gestión de Participantes', icon: SettingIcon, to: 'manage-participants'},
  {title: 'Gestión de Proyectos', icon: AssesmentIcon, to: 'manage-projects'}
]

export const drawerWidth = 260