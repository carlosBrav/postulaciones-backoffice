import { lazy } from 'react'

export const ManageParticipants = lazy(() =>
  import('@presentation/pages/manage-participants/participants-new')
)

export const ListParticipants = lazy(() =>
  import('@presentation/pages/manage-participants/participants-list')
)
