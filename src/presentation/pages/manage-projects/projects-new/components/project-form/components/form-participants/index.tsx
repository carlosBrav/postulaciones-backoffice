import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { ButtonCustom } from '@presentation/components/button/buton-common'
import { InputTextCustom } from '@presentation/components/input-text/custom'
import DataTable from '@presentation/components/data-table'
import { participantsProyectCells } from '@presentation/pages/manage-projects/constants'
import {
  Participante,
  ProjectParticipantCreateReq,
  ProjectParticipantDelete,
  ProjectParticipantDeleteRequest,
  ProjectParticipantRequest
} from '@domain/project'
import { ModalParticipants } from '../modal-participants'
import ModalComponent from '@presentation/components/modal'
import { useNavigate } from 'react-router-dom'
import { ProjectParticipReqEval } from '@domain/project/models/project-particip-request-eval'
import { useExportParticipant } from '@presentation/pages/manage-projects/projects-new/components/project-form/hooks/use-export-participant'
import { useManageParticipants } from '@presentation/pages/manage-projects/projects-new/components/project-form/hooks/use-manage-participants'

type Props = {
  handleEmailParticipants: (data: ProjectParticipantCreateReq) => void
  handleAddParticipants: (data: ProjectParticipantCreateReq) => void
  handleDeleteParticipants: (data: ProjectParticipantDeleteRequest) => void
  participantes?: Participante[]
  id?: string
  idCurrentUsuario?: number
  disabledActions?: boolean
}

function FormParticipants({
  handleEmailParticipants = (data: ProjectParticipantCreateReq) => {},
  handleAddParticipants = (data: ProjectParticipantCreateReq) => {},
  handleDeleteParticipants = (data: ProjectParticipantDeleteRequest) => {},
  participantes = [],
  id = '',
  idCurrentUsuario = 0,
  disabledActions = false
}: Props) {
  const {
    handleAcceptModal,
    handleDelete,
    handleEvaluations,
    handleSentEmail,
    setOpenDelete,
    setOpenModalEmail,
    setSearch,
    setOpenModal,
    setParticipantsSelected,
    setNoEvaluation,
    search,
    noEvaluation,
    openDelete,
    openModal,
    openModalEmail,
    participantesFilter,
    participantsSelected
  } = useManageParticipants(
    handleEmailParticipants,
    handleAddParticipants,
    handleDeleteParticipants,
    participantes,
    id as string,
    idCurrentUsuario
  )

  const {open, handleOpen, handleAccept, handleCancel } =
    useExportParticipant()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Box maxWidth="200px">
            <ButtonCustom
              disabled={disabledActions}
              onClick={() => setOpenModal(true)}
              title={'Agregar Participante'}
              type="button"
            />
          </Box>
        </Box>
      </Grid>
      <Grid item md={6} xs={12}>
        <InputTextCustom
          label="Buscar participantes por nombre o código"
          onChange={setSearch}
          value={search}
        />
      </Grid>
      <Grid item xs={12}>
        <DataTable<Participante>
          rows={participantesFilter as Participante[]}
          isEditable={false}
          isCheckList={true}
          isMailAble={true}
          handleEvaluations={handleEvaluations}
          handleEmail={() => setOpenModalEmail(true)}
          rowsSelected={participantsSelected}
          setRowsSelected={setParticipantsSelected}
          redirectEdit={() => {}}
          handleOnOpen={() => setOpenDelete(true)}
          idField="idParticipante"
          fields={[
            'idParticipante',
            'dscTipDoc',
            'numDoc',
            'nomParticipante',
            'scoreSalPro',
            'scoreMedVid',
            'scorePotEmp',
            'scorePitch',
            'scoreEntrev',
            'dscEstado'
          ]}
          headCells={participantsProyectCells}
        />
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Box width="100%" maxWidth="200px">
            <ButtonCustom
              onClick={handleOpen}
              title="Exportar XLS"
              type="button"
            />
          </Box>
        </Box>
      </Grid>
      {open && (
        <ModalComponent
          onAccept={() => handleAccept(participantesFilter,  'participants')}
          onCancel={handleCancel}
          open={open}
          title="Exportar participantes XLS"
          description="¿Desea exportar los participantes?"
        />
      )}
      {noEvaluation && (
        <ModalComponent
          onAccept={() => setNoEvaluation(false)}
          onCancel={() => setNoEvaluation(false)}
          isModalInformation={noEvaluation}
          open={noEvaluation}
          title="Evaluación del Participante"
          description="No se puede evaluar participantes en estado Pendiente."
        />
      )}
      {openModalEmail && (
        <ModalComponent
          onAccept={handleSentEmail}
          onCancel={() => setOpenModalEmail(false)}
          open={openModalEmail}
          title=" Iniciar proceso de participante"
          description="¿Está seguro que desea iniciar el proceso del participante?"
        />
      )}
      {openDelete && (
        <ModalComponent
          onAccept={handleDelete}
          onCancel={() => setOpenDelete(false)}
          open={openDelete}
          title="Eliminar participante"
          description="¿Está seguro de querer eliminar(los)?"
        />
      )}
      {openModal && (
        <ModalParticipants
          idCurrentUsuario={idCurrentUsuario}
          id={id}
          onAccept={handleAcceptModal}
          onCancel={() => setOpenModal(false)}
          open={openModal}
          idsSelected={participantesFilter.map((val) => val.numDoc)}
        />
      )}
    </Grid>
  )
}

export { FormParticipants }
