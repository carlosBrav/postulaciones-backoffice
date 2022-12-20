import { Box, DialogActions, DialogContent, styled } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import * as React from 'react'

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'capitalize',
  color: theme.palette.getContrastText('#572364'),
  backgroundColor: '#572364',
  '&:hover': {
    backgroundColor: '#572364',
  },
}))

interface SimpleDialogProps {
  open: boolean
  title: string
  description?: string
  onCancel: () => void
  onAccept: () => void
  minWidth?: number
  isModalInformation?: boolean
}

export default function Modal(props: SimpleDialogProps) {
  const {
    onCancel,
    onAccept,
    open,
    title,
    minWidth,
    description,
    isModalInformation = false
  } = props

  return (
    <Dialog onClose={onCancel} open={open}>
      <Box width="100%" padding="10px">
        <DialogTitle fontSize="18px" minWidth={minWidth}>
          {title}
        </DialogTitle>
        {description && (
          <DialogContent style={{ fontSize: 15 }}>{description}</DialogContent>
        )}
        <DialogActions>
          {isModalInformation ? (
            <CustomButton variant="contained" onClick={onCancel}>
              Aceptar
            </CustomButton>
          ) : (
            <>
              <CustomButton variant="outlined" onClick={onCancel}>
                Cancelar
              </CustomButton>

              <CustomButton variant="contained" onClick={onAccept}>
                Aceptar
              </CustomButton>
            </>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  )
}
