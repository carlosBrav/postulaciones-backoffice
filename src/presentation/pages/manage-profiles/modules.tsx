import { lazy } from 'react';

export const ProfilesManage = lazy(() =>
import('@presentation/pages/manage-profiles/profile-new')
)

export const ProfilesList = lazy(() =>
import('@presentation/pages/manage-profiles/profile-list')
)