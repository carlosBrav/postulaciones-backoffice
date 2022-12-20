import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import {
  ProfilesManage,
  ProfilesList,
} from '@presentation/pages/manage-profiles/modules'
import {ProfileFactory} from '@main/factories/profile-factory'
import LayoutBody from '@presentation/pages/layout/layout-body'

const ManageProfileRouter = () => {
  const repositories = {
    profile: ProfileFactory,
  }
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <Routes>
        <Route path="" element={<LayoutBody />}>
          <Route index element={<ProfilesList repository={repositories.profile} />} />
          <Route
            path="new"
            element={<ProfilesManage repository={repositories.profile} />}
          />
          <Route
            path="edit/:id"
            element={<ProfilesManage repository={repositories.profile} />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}

export { ManageProfileRouter }
