import { lazy } from 'react'

export const Login = lazy(() =>
import('@presentation/pages/authentication/login/login')
)

export const MainComponent = lazy(() =>
  import('@presentation/pages/dashboard/main')
)

export const WelcomeComponent = lazy(() =>
import('@presentation/pages/dashboard/welcome')
)

export const ManageParticipants = lazy(() =>
import('@presentation/pages/manage-participants')
)

export const ManageProfiles = lazy(() =>
import('@presentation/pages/manage-profiles/profile-list')
)

export const ManageProjects = lazy(() =>
import('@presentation/pages/manage-projects')
)

export const ManageUsers = lazy(() =>
import('@presentation/pages/manage-users/users-list')
)