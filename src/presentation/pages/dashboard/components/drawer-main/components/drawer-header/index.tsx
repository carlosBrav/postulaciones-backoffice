import React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { Box, IconButton } from '@mui/material'

import TextComponent from '@presentation/components/text-common'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

type Props = {
  onClick: () => void
  title: string
}

function DrawerHeaderComponent({ onClick, title = '' }: Props) {
  const theme = useTheme()
  return (
    <DrawerHeader>
      <Box>
        <TextComponent text={title} type="normal" fontSize="12px" />
      </Box>

      <IconButton onClick={onClick}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
  )
}

export default DrawerHeaderComponent
