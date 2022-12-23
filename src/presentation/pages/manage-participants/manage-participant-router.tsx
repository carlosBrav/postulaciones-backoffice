import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import {
  ManageParticipants,
  ListParticipants
} from '@presentation/pages/manage-participants/modules'
import { ParticipantFactory } from '@main/factories/participant-factory'
import LayoutBody from '@presentation/pages/layout/layout-body'

const ManageParticipantRouter = () => {
  const repositories = {
    project: ParticipantFactory
  }
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <Routes>
        <Route path="" element={<LayoutBody />}>
          <Route
            index
            element={<ListParticipants repository={repositories.project} />}
          />
          <Route
            path="new"
            element={<ManageParticipants repository={repositories.project} />}
          />
          <Route
            path="edit/:id"
            element={<ManageParticipants repository={repositories.project} />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}

export { ManageParticipantRouter }
