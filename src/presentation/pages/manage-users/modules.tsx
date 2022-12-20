import { lazy } from 'react';

export const ManageUsers = lazy(() =>
import('@presentation/pages/manage-users/users-new')
)

export const ListUsers = lazy(() =>
import('@presentation/pages/manage-users/users-list')
)