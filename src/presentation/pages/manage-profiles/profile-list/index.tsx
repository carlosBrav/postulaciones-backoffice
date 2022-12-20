import React, { useContext, useEffect, useState } from 'react'
import useProfiles from '@main/adapters/profile/use-profile'
import { Profile, ProfileRepository } from '@domain/profiles'
import { Box } from '@mui/material'
import DataTable from '@presentation/components/data-table'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from '@presentation/components/header'
import { headCells } from '@presentation/pages/manage-profiles/constants'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import useProfileForm from '@presentation/pages/manage-profiles/profile-list/hooks/use-profile-list'
import ModalComponent from '@presentation/components/modal'

type Props = {
  repository: ProfileRepository
}

function ManageProfiles({ repository }: Props) {
  const {
    isLoadingProfiles,
    goToCreate,
    listProfiles,
    contentsSelected,
    setContentsSelected,
    goToEdit,
    setOpenDelete,
    openDelete,
    handleDeleteProfile,
  } = useProfileForm(repository)
  return isLoadingProfiles ? (
    <FullScreenLoader />
  ) : (
    <>
      <HeaderComponent
        title="Perfiles"
        onClick={goToCreate}
        titleButton="Agregar"
      />

      <Box width="100%" marginTop="30px">
        <DataTable<Profile>
          rows={listProfiles as Profile[]}
          rowsSelected={contentsSelected}
          setRowsSelected={setContentsSelected}
          redirectEdit={goToEdit}
          handleOnOpen={() => setOpenDelete(true)}
          idField="idPerfil"
          fields={['idPerfil', 'nombre']}
          headCells={headCells}
        />
      </Box>
      {openDelete && (
        <ModalComponent
          onAccept={handleDeleteProfile}
          onCancel={() => setOpenDelete(false)}
          open={openDelete}
          title="Eliminar perfil"
          description="¿Está seguro de querer eliminar(los)?"
        />
      )}
    </>
  )
}

export default ManageProfiles
