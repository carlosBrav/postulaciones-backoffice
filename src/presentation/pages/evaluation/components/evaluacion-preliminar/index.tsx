import { Box, Grid, Button } from '@mui/material'
import { SwitchComponent } from '@presentation/components/switch-component/switch'
import TextCommon from '@presentation/components/text-common'
import React, { useEffect, useState } from 'react'
import { ParticipantEvaluation } from '@domain/project'

type Props = {
  evaluation1: ParticipantEvaluation
  evaluation2: ParticipantEvaluation
}

type Palette = {
  title: string
  color: string
}

const emptyPalette: Palette = {
  title: '',
  color: '#FFF'
}

const validateScore = (score: number) => {
  if (score >= 2.0 && score <= 3.0) {
    return {
      title: 'Alta',
      color: '#8ecd48'
    }
  }
  if (score >= 0.76 && score <= 1.99) {
    return {
      title: 'Media',
      color: '#fdff66'
    }
  }
  if (score >= 0.1 && score <= 0.75) {
    return {
      title: 'Baja',
      color: '#ff3e3f'
    }
  }
}

function EvaluacionPreliminar({ evaluation1, evaluation2 }: Props) {
  const [finishTest, setFinishTest] = useState<boolean>(false)
  //const { dscEstado, score: score1 } = evaluation1
  const [paletteSalud, setPaletteSalud] = useState<Palette>(emptyPalette)
  const [paletteVida, setPaletteVida] = useState<Palette>(emptyPalette)
  //const { score: score2 } = evaluation2
  const [score1, setScore1] = useState<number>(0)
  const [score2, setScore2] = useState<number>(0)

  useEffect(() => {
    if (evaluation1) {
      setFinishTest(evaluation1.idEstado === '00001')
    }
  }, [evaluation1])

  useEffect(() => {
    if (evaluation1) {
      const result = validateScore(evaluation1.score)
      setPaletteSalud(result as Palette)
      setScore1(evaluation1.score)
    }
  }, [evaluation1])

  useEffect(() => {
    if (evaluation2) {
      const result = validateScore(evaluation2.score)
      setPaletteVida(result as Palette)
      setScore2(evaluation2.score)
    }
  }, [evaluation2])

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
              onChange={setFinishTest}
              value={finishTest}
              label="Completar Prueba"
            />
          </Box>
          <Box maxWidth="200px">
            <Button variant="outlined" color="success">
              {evaluation1 ? evaluation1.dscEstado : ''}
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
