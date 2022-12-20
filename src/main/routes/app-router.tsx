import React, { Suspense, useContext, useEffect } from 'react'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import {
  Login,
  ManageParticipants,
  ManageProjects,
  MainComponent,
  WelcomeComponent,
} from '@presentation/pages/modules'
import { AuthenticationFactory } from '@main/factories/login-factory'
import AuthenticationProvider from '@presentation/pages/authentication/context/authentication-provider'
import ParameterProvider from '@presentation/pages/context/parameter-provider'
import { ParameterFactory } from '@main/factories/parameter-factory'
import { ProfileFactory } from '@main/factories/profile-factory'
import { UserFactory } from '@main/factories/user-factory'
import { ManageUsersRouter } from '@presentation/pages/manage-users/manage-users-router'
import { ManageProfileRouter } from '@presentation/pages/manage-profiles/manage-profile-router'

function ManageRoutes() {
  const repositories = {
    auth: AuthenticationFactory,
    user: UserFactory,
  }

  return (
    <Routes>
      <Route index path="/encuesta" element={<Login auth={repositories.auth} />} />

      <Route path="/dashboard" element={<MainComponent />}>
        <Route index element={<WelcomeComponent />} />
        <Route path="manage-participants/*" element={<ManageParticipants />} />
        <Route path="manage-profiles/*" element={<ManageProfileRouter />} />
        <Route path="manage-projects/*" element={<ManageProjects />} />
        <Route path="manage-users/*" element={<ManageUsersRouter />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/encuesta" replace />}
    />
    </Routes>
  )
}

export default function AppRouter() {
  const repositories = {
    parameter: ParameterFactory,
    profile: ProfileFactory,
  }
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <AuthenticationProvider>
        <ParameterProvider
          parameter={repositories.parameter}
          profile={repositories.profile}
        >
          <HashRouter>{ManageRoutes()}</HashRouter>
        </ParameterProvider>
      </AuthenticationProvider>
    </Suspense>
  )
}
