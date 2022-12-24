import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import {
  ManageParticipants,
  ListParticipants
} from '@presentation/pages/manage-participants/modules'
import { ParticipantFactory } from '@main/factories/participant-factory'
import { ParameterFactory } from '@main/factories/parameter-factory'
import LayoutBody from '@presentation/pages/layout/layout-body'

const ManageParticipantRouter = () => {
  const repositories = {
    participant: ParticipantFactory,
    parameter: ParameterFactory
  }
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <Routes>
        <Route path="" element={<LayoutBody />}>
          <Route
            index
            element={<ListParticipants repository={repositories.participant} />}
          />
          <Route
            path="new"
            element={
              <ManageParticipants
                parameter={repositories.parameter}
                repository={repositories.participant}
              />
            }
          />
          <Route
            path="edit/:id"
            element={
              <ManageParticipants
                parameter={repositories.parameter}
                repository={repositories.participant}
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  )
}

export { ManageParticipantRouter }
