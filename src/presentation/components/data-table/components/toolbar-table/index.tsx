import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import EmailIcon from '@mui/icons-material/Email'
import BallotIcon from '@mui/icons-material/Ballot'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import React from 'react'

interface EnhancedTableToolbarProps {
  numSelected: number
  redirectEdit: () => void
  handleOnOpen: () => void
  handleEmail?: () => void
  handleEvaluations?: () => void
  isEditable?: boolean
  isDeleteAble?: boolean
  isMailAble?: boolean
  isCheckList?: boolean
}

export default function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const {
    numSelected,
    redirectEdit,
    handleOnOpen,
    handleEmail = () => {},
    handleEvaluations = () => {},
    isEditable = true,
    isDeleteAble = true,
    isMailAble = false,
    isCheckList = false
  } = props

  return numSelected ? (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...{
          bgcolor: (theme) => '#FFFFFF'
        }
      }}
    >
      {
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography color="inherit" variant="subtitle1" component="div">
            {`${numSelected} ${
              numSelected > 2 ? 'Seleccionados' : 'Seleccionado'
            }`}
          </Typography>
          <Box>
            {isMailAble && (
              <Tooltip title="Enviar email">
                <IconButton onClick={handleEmail}>
                  <EmailIcon color="primary" />
                </IconButton>
              </Tooltip>
            )}

            {isCheckList && (
              <Tooltip title="Listar">
                <IconButton onClick={handleEvaluations}>
                  <BallotIcon color="success" />
                </IconButton>
              </Tooltip>
            )}

            {isDeleteAble && (
              <Tooltip title="Eliminar">
                <IconButton onClick={handleOnOpen}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Tooltip>
            )}

            {numSelected === 1 && isEditable && (
              <Tooltip title="Editar">
                <IconButton onClick={redirectEdit}>
                  <EditIcon color="success" />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Box>
      }
    </Toolbar>
  ) : (
    <Box />
  )
}
