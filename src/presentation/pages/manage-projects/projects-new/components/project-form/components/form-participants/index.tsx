import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { ButtonCustom } from '@presentation/components/button/buton-common'
import { InputTextCustom } from '@presentation/components/input-text/custom'
import DataTable from '@presentation/components/data-table'
import { participantsProyectCells } from '@presentation/pages/manage-projects/constants'
import { Participante, ProjectParticipantCreateReq, ProjectParticipantDelete, ProjectParticipantDeleteRequest } from '@domain/project'
import { ModalParticipants } from '../modal-participants'
import ModalComponent from '@presentation/components/modal'

type Props = {
  handleAddParticipants: (data: ProjectParticipantCreateReq) => void
  handleDeleteParticipants: (data: ProjectParticipantDeleteRequest) => void
  participantes?: Participante[]
  id?: string
  idCurrentUsuario?: number
}

function FormParticipants({
  handleAddParticipants = (data: ProjectParticipantCreateReq) => {},
  handleDeleteParticipants = (data: ProjectParticipantDeleteRequest) => {},
  participantes = [],
  id = '',
  idCurrentUsuario = 0
}: Props) {
  const [participantsSelected, setParticipantsSelected] = useState<any[]>([])
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [participantesFilter, setParticipantesFilter] = useState<
    Participante[]
  >([])
  const [search, setSearch] = useState<string>('')

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
    deleteObject.listProyectoParticipante = participantsSelected.map((val)=> ProjectParticipantDelete.fromJson({
      idParticipante: val.idParticipante
    }))
    handleDeleteParticipants(deleteObject)
    setParticipantsSelected([])
    setOpenDelete(false)
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
          handleCheckList={() => {}}
          handleEmail={() => {}}
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
          idsSelected={participantesFilter.map(
            (val) => val.numDoc
          )}
        />
      )}
    </Grid>
  )
}

export { FormParticipants }
