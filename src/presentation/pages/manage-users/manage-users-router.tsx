import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import {
  ManageUsers,
  ListUsers,
} from '@presentation/pages/manage-users/modules'
import { UserFactory } from '@main/factories/user-factory'
import LayoutBody from '@presentation/pages/layout/layout-body'

const ManageUsersRouter = () => {
  const repositories = {
    user: UserFactory,
  }
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <Routes>
        <Route path="" element={<LayoutBody />}>
          <Route index element={<ListUsers repository={repositories.user} />} />
          <Route
            path="new"
            element={<ManageUsers repository={repositories.user} />}
          />
          <Route
            path="edit/:id"
            element={<ManageUsers repository={repositories.user} />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}

export { ManageUsersRouter }
