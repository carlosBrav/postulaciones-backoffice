import React, { useEffect, useState } from 'react'
import { UserRepository, User } from '@domain/user'

import HeaderComponent from '@presentation/components/header'
import DataTable from '@presentation/components/data-table'
import { Box } from '@mui/material'

import { headCells } from '@presentation/pages/manage-users/constants'
import ModalComponent from '@presentation/components/modal'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import useUserList from '@presentation/pages/manage-users/users-list/hooks/user-users-list'

type Props = {
  repository: UserRepository
}

function ManageUsers({ repository }: Props) {
  const {
    contentsSelected,
    isLoadingDeleteUser,
    isLoadingUsers,
    openDelete,
    listUsers,
    goToCreate,
    goToEdit,
    handleDeleteUser,
    setContentsSelected,
    setOpenDelete
  } = useUserList(repository)
  
  return isLoadingUsers || isLoadingDeleteUser ? (
    <FullScreenLoader />
  ) : (
    <>
      <HeaderComponent
        title="Usuarios"
        onClick={goToCreate}
        titleButton="Agregar"
      />

      <Box width="100%" marginTop="30px">
        <DataTable<User>
          rows={listUsers as User[]}
          rowsSelected={contentsSelected}
          setRowsSelected={setContentsSelected}
          redirectEdit={goToEdit}
          handleOnOpen={() => setOpenDelete(true)}
          idField="idUsuario"
          fields={['idUsuario', 'numDoc', 'codigo', 'nombre', 'email']}
          headCells={headCells}
        />
      </Box>
      {openDelete && (
        <ModalComponent
          onAccept={handleDeleteUser}
          onCancel={() => setOpenDelete(false)}
          open={openDelete}
          title="Eliminar usuario"
          description="¿Está seguro de querer eliminar(los)?"
        />
      )}
    </>
  )
}

export default ManageUsers
