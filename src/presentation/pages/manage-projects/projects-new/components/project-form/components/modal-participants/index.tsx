import React, { useContext, useEffect, useState } from 'react'
import { Box, DialogActions, DialogContent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import DataTable from '@presentation/components/data-table'
import { headCells } from '@presentation/pages/manage-participants/constants'
import { ParticipantResponse } from '@domain/participant'
import { ButtonCustom } from '@presentation/components/button/buton-common'
import { InputTextCustom } from '@presentation/components/input-text/custom'
import TextCommon from '@presentation/components/text-common'
import { ProjectParticipantCreateReq, ProjectParticipantRequest } from '@domain/project'

type Props = {
  open: boolean
  onCancel: () => void
  onAccept: (data: ProjectParticipantCreateReq) => void
  idsSelected: string[]
  id?: string
  idCurrentUsuario?: number
}

function ModalParticipants({
  open,
  onCancel = () => {},
  onAccept = (data: ProjectParticipantCreateReq) => {},
  idsSelected = [],
  id = '',
  idCurrentUsuario = 0
}: Props) {
  const { listParticipants } = useContext(ParameterManageContext)
  const [participantsSelected, setParticipantsSelected] = useState<any[]>([])
  const [search, setSearch] = useState<string>('')
  const [participants, setParticipants] = useState<ParticipantResponse[]>([])
  const [participantsFilter, setParticipantsFilter] = useState<
    ParticipantResponse[]
  >([])

  const handleAccept = () => {
    const ppcObject = new ProjectParticipantCreateReq()
    ppcObject.idProyecto = +id
    ppcObject.idUsuCrea = idCurrentUsuario
    ppcObject.listProyectoParticipante = participantsSelected.map((val) =>
      ProjectParticipantRequest.fromJson({
        idParticipante: val.idParticipante,
        idEstado: '00001',
        idResultado: '00003'
      })
    )
    onAccept(ppcObject)
  }

  useEffect(() => {
    setParticipants(
      listParticipants.filter(
        (val) => !idsSelected.find((value)=> value === val.numDoc)
      )
    )
  }, [])

  useEffect(()=>{
    if(participants.length>0){
      setParticipantsFilter([...participants])
    }
  },[participants])

  useEffect(() => {
    if (search.length === 0) {
      setParticipantsFilter([...participants])
    } else {
      setParticipantsFilter(
        participants.filter(
          (val) =>
            val.nomCompleto.toUpperCase().includes(search.toUpperCase()) ||
            val.numDoc.includes(search)
        )
      )
    }
  }, [search])

  return (
    <Dialog open={open} fullWidth maxWidth="lg">
      <Box width="100%" padding="10px">
        <DialogTitle>
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            padding="15px"
            style={{ backgroundColor: '#1A5EAF' }}
          >
            <TextCommon
              text="Agregar Participantes"
              fontSize="18px"
              type="secondary"
            />
            <CloseIcon
              sx={{ color: 'white', cursor: 'pointer' }}
              onClick={onCancel}
            />
          </Box>
        </DialogTitle>

        <DialogContent style={{ fontSize: 15, paddingTop: 10 }}>
          <Box width="100%">
            <InputTextCustom
              label="Buscar Participantes"
              onChange={setSearch}
              value={search}
            />
          </Box>
          <Box width="100%" marginTop="30px">
            <DataTable<ParticipantResponse>
              rows={participantsFilter as ParticipantResponse[]}
              rowsSelected={participantsSelected}
              isEditable={false}
              isDeleteAble={false}
              setRowsSelected={setParticipantsSelected}
              redirectEdit={() => {}}
              handleOnOpen={() => {}}
              idField="idParticipante"
              fields={[
                'idParticipante',
                'dscTipDoc',
                'numDoc',
                'nomCompleto',
                'email'
              ]}
              headCells={headCells}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="200px">
              <ButtonCustom
                disabled={participantsSelected.length === 0}
                title={'Aceptar'}
                type="button"
                onClick={handleAccept}
              />
            </Box>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  )
}

export { ModalParticipants }
