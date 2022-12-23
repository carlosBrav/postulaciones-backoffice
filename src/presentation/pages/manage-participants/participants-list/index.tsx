import React from 'react'
import { ParticipantRepository, ParticipantResponse } from '@domain/participant'
import useParticipantList from '@presentation/pages/manage-participants/participants-list/hooks/use-participant-list'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import HeaderComponent from '@presentation/components/header'
import { Box } from '@mui/material'
import DataTable from '@presentation/components/data-table'
import { headCells } from '@presentation/pages/manage-participants/constants'

type Props = {
  repository: ParticipantRepository
}

function ParticipantsList({ repository }: Props) {
  const {
    isLoadingParticipants,
    goToCreate,
    goToEdit,
    setOpenDelete,
    listParticipants,
    participantsSelected,
    setParticipantsSelected
  } = useParticipantList(repository)

  return isLoadingParticipants ? (
    <FullScreenLoader />
  ) : (
    <>
      <HeaderComponent
        title="Participantes"
        onClick={goToCreate}
        titleButton="Agregar"
      />

      <Box width="100%" marginTop="30px">
        <DataTable<ParticipantResponse>
          rows={listParticipants as ParticipantResponse[]}
          rowsSelected={participantsSelected}
          setRowsSelected={setParticipantsSelected}
          redirectEdit={goToEdit}
          handleOnOpen={() => setOpenDelete(true)}
          idField="idParticipante"
          fields={[
            'idParticipante',
            'idTipDoc',
            'numDoc',
            'nomCompleto',
            'email'
          ]}
          headCells={headCells}
        />
      </Box>
      {/* {openDelete && (
        <ModalComponent
          onAccept={handleDeleteProfile}
          onCancel={() => setOpenDelete(false)}
          open={openDelete}
          title="Eliminar perfil"
          description="¿Está seguro de querer eliminar(los)?"
        />
      )} */}
    </>
  )
}

export default ParticipantsList
