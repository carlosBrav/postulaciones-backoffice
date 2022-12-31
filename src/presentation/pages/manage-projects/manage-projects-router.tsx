import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import {
  ManageProjects,
  ListProjects,
  Evaluations
} from '@presentation/pages/manage-projects/modules'
import { ProjectFactory } from '@main/factories/project-factory'
import LayoutBody from '@presentation/pages/layout/layout-body'

const ManageProjectsRouter = () => {
  const repositories = {
    project: ProjectFactory
  }
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <Routes>
        <Route path="" element={<LayoutBody />}>
          <Route
            index
            element={<ListProjects repository={repositories.project} />}
          />
          <Route
            path="new"
            element={<ManageProjects repository={repositories.project} />}
          />
          <Route
            path="edit/:id"
            element={<ManageProjects repository={repositories.project} />}
          />
          <Route
            path="evaluation/project/:idProyecto/participant/:idParticipante"
            element={<Evaluations repository={repositories.project} />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}

export { ManageProjectsRouter }
