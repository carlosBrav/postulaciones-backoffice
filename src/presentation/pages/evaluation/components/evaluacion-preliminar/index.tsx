import { Box, Grid, Button } from '@mui/material'
import { SwitchComponent } from '@presentation/components/switch-component/switch'
import TextCommon from '@presentation/components/text-common'
import React from 'react'

type Props = {
  statusEP: boolean
  setStatusEP: (status: boolean) => void
  dscEstado: string
  score1: number
  score2: number
  paletteSalud: any
  paletteVida: any
}

function EvaluacionPreliminar({
  statusEP,
  setStatusEP,
  dscEstado,
  score1,
  score2,
  paletteSalud,
  paletteVida,
}: Props) {
  

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="30px"
        >
          <Box maxWidth="200px">
            <SwitchComponent
              onChange={setStatusEP}
              value={statusEP}
              label="Completar Prueba"
            />
          </Box>
          <Box maxWidth="200px">
            <Button variant="outlined" color="success">
              {dscEstado}
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item md={8} xs={12}>
        <TextCommon
          fontSize="16px"
          text="Servicios de Salud y Protección"
          type="normal"
        />
        <Box
          width="100%"
          maxWidth="400px"
          height="40px"
          display="flex"
          flexDirection="row"
          marginBottom="30px"
          paddingLeft="40px"
          marginTop="20px"
        >
          <Box
            width="50%"
            height="100%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            border="solid 1px #d9d7d7"
          >
            {score1}
          </Box>
          <Box
            width="50%"
            height="100%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            border="solid 1px #d9d7d7"
            style={{ backgroundColor: `${paletteSalud.color}` }}
          >
            {paletteSalud.title}
          </Box>
        </Box>
      </Grid>
      <Grid item md={8} xs={12}>
        <TextCommon
          fontSize="16px"
          text="Servicios de Salud y Protección"
          type="normal"
        />
        <Box
          width="100%"
          maxWidth="400px"
          height="40px"
          display="flex"
          flexDirection="row"
          paddingLeft="40px"
          marginTop="20px"
        >
          <Box
            width="50%"
            display="flex"
            height="100%"
            flexDirection="row"
            justifyContent="center"
            border="solid 1px #d9d7d7"
            alignItems="center"
          >
            {score2}
          </Box>
          <Box
            width="50%"
            display="flex"
            height="100%"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            border="solid 1px #d9d7d7"
            style={{ backgroundColor: `${paletteVida.color}` }}
          >
            {paletteVida.title}
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default EvaluacionPreliminar
