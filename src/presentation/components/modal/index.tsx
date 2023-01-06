import { Box, DialogActions, DialogContent, styled } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import * as React from 'react'
import { ButtonComponent } from '@presentation/components/button'

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
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="center"
            >
              <Box maxWidth="150px" width="100%">
                <ButtonComponent
                  variant="contained"
                  title="Aceptar"
                  type="button"
                  onClick={onCancel}
                />
              </Box>
            </Box>
          ) : (
            <>
              <ButtonComponent
                variant="outlined"
                type="button"
                title="Cancelar"
                onClick={onCancel}
              />

              <ButtonComponent
                variant="contained"
                type="button"
                title="Aceptar"
                onClick={onAccept}
              />
            </>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  )
}
