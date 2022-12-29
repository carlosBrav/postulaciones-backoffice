import React, { useContext, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { ButtonCustom } from '@presentation/components/button/buton-common'
import InputTextComponent from '@presentation/components/input-text'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import DataTable from '@presentation/components/data-table'
import { participantsProyectCells } from '@presentation/pages/manage-projects/constants'
import { ParticipantResponse } from '@domain/participant'
import { Participante } from '@domain/project'
import { ModalParticipants } from '../modal-participants'

type Props = {
  control: any
  errors: any
  participantes?: Participante[]
}

function FormParticipants({ control, errors, participantes = [] }: Props) {
  const { listParticipants } = useContext(ParameterManageContext)
  const [participantsSelected, setParticipantsSelected] = useState<any[]>([])
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)

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
        <InputTextComponent
          control={control}
          id="search"
          name="search"
          placeholder="Buscar participantes por nombre o código"
        />
      </Grid>
      <Grid item xs={12}>
        <DataTable<Participante>
          rows={participantes as Participante[]}
          isEditable={false}
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
      {openModal && (
        <ModalParticipants
          onAccept={() => setOpenModal(false)}
          onCancel={() => setOpenModal(false)}
          open={openModal}
        />
      )}
    </Grid>
  )
}

export { FormParticipants }
