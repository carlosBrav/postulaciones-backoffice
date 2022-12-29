import React, { useContext, useState } from 'react'
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

type Props = {
  open: boolean
  onCancel: () => void
  onAccept: () => void
}

function ModalParticipants({
  open,
  onCancel = () => {},
  onAccept = () => {}
}: Props) {
  const { listParticipants } = useContext(ParameterManageContext)
  const [participantsSelected, setParticipantsSelected] = useState<any[]>([])
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

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
            style={{ backgroundColor: '#572364' }}
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
              rows={listParticipants as ParticipantResponse[]}
              rowsSelected={participantsSelected}
              isEditable={false}
              isDeleteAble={false}
              setRowsSelected={setParticipantsSelected}
              redirectEdit={() => {}}
              handleOnOpen={() => setOpenDelete(true)}
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
                onClick={onAccept}
              />
            </Box>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  )
}

export { ModalParticipants }
