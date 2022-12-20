import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PublishIcon from '@mui/icons-material/Publish'
import VisibilityIcon from '@mui/icons-material/Visibility'
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
}

export default function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, redirectEdit, handleOnOpen } = props

  return numSelected ? (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...{
          bgcolor: (theme) => '#FFFFFF',
        },
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
            <Tooltip title="Eliminar">
              <IconButton onClick={handleOnOpen}>
                <DeleteIcon color="error" />
              </IconButton>
            </Tooltip>

            {numSelected === 1 && (
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
