import { lazy } from 'react'

export const ManageProjects = lazy(() =>
  import('@presentation/pages/manage-projects/projects-new')
)

export const ListProjects = lazy(() =>
  import('@presentation/pages/manage-projects/projects-list')
)
