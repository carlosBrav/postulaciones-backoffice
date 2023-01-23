import { Box, Button, Grid } from '@mui/material'
import { SwitchComponent } from '@presentation/components/switch-component/switch'
import { RangeComponent } from './components/range'
import { QuizComponent } from './components/quiz'
import React from 'react'
import {
  ParticipantEvaluation,
  ParticipantEvaluationSecInd
} from '@domain/project'

type Props = {
  setStatusPitch: (status: boolean) => void
  changeResponse: (score: number, id: number) => void
  statusPitch: boolean
  dscEstado: string
  evaluate: ParticipantEvaluation
  pitchEvalSecInd: ParticipantEvaluationSecInd[]
}

function Pitch({
  setStatusPitch,
  changeResponse,
  statusPitch,
  dscEstado,
  evaluate,
  pitchEvalSecInd
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
          marginBottom="15px"
        >
          <Box maxWidth="200px">
            <SwitchComponent
              onChange={setStatusPitch}
              value={statusPitch}
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
      <Grid item xs={12}>
        <Grid item container xs={12}>
          <Grid item md={6} xs={12}>
            {evaluate && (
              <Box width="100%" padding="10px">
                <iframe
                  width="100%"
                  height="400px"
                  src={`${evaluate.videoURL}#view=fitH%zoom=fitH`}
                ></iframe>
              </Box>
            )}
          </Grid>
          <Grid item md={6} xs={12}>
            <Box width="100%" padding="10px">
              {pitchEvalSecInd && (
                <>
                  <RangeComponent />
                  {pitchEvalSecInd.map((val, index) => (
                    <QuizComponent
                      key={index}
                      value={val.respuesta}
                      title={val.dscIndicador}
                      id={val.idIndicador}
                      changeResponse={changeResponse}
                    />
                  ))}
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Pitch
