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
  const navigate = useNavigate()
  const [participantsSelected, setParticipantsSelected] = useState<any[]>([])
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openModalEmail, setOpenModalEmail] = useState<boolean>(false)
  const [participantesFilter, setParticipantesFilter] = useState<
    Participante[]
  >([])
  const [search, setSearch] = useState<string>('')
  const [noEvaluation, setNoEvaluation] = useState<boolean>(false)

  useEffect(() => {
    if (participantes && participantes.length > 0) {
      setParticipantesFilter([...participantes])
    }
  }, [participantes])

  useEffect(() => {
    if (search.length === 0) {
      setParticipantesFilter([...participantes])
    } else {
      setParticipantesFilter(
        participantesFilter.filter(
          (val) =>
            val.nomParticipante.toUpperCase().includes(search.toUpperCase()) ||
            val.numDoc.includes(search)
        )
      )
    }
  }, [search])

  const handleAcceptModal = (data: ProjectParticipantCreateReq) => {
    handleAddParticipants(data)
    setOpenModal(false)
  }

  const handleDelete = () => {
    const deleteObject = new ProjectParticipantDeleteRequest()
    deleteObject.idProyecto = +id
    deleteObject.listProyectoParticipante = participantsSelected.map((val) =>
      ProjectParticipantDelete.fromJson({
        idParticipante: val.idParticipante
      })
    )
    handleDeleteParticipants(deleteObject)
    setParticipantsSelected([])
    setOpenDelete(false)
  }

  const handleSentEmail = () => {
    const ppcObject = new ProjectParticipantCreateReq()
    ppcObject.idProyecto = +id
    ppcObject.listProyectoParticipante = participantsSelected.map((val) =>
      ProjectParticipantRequest.fromJson({
        idParticipante: val.idParticipante,
        idEstado: '00002',
        idResultado: '00003',
        idUsuCrea: idCurrentUsuario
      })
    )
    handleEmailParticipants(ppcObject)
    setOpenDelete(false)
    setParticipantsSelected([])
  }

  const handleEvaluations = () => {
    const isNotAllowed =
      participantsSelected.filter((val) => val.dscEstado === 'Pendiente')
        .length > 0
    if (isNotAllowed) {
      setNoEvaluation(true)
    } else {
      navigate(
        `/dashboard/manage-projects/evaluation/project/${id}/participant/${participantsSelected[0].idParticipante}`
      )
    }
  }

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
      </Grid>
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
