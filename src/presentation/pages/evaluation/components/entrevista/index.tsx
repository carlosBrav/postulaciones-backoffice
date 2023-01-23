import { ParticipantEvaluationSecInd } from '@domain/project/models/participant-evaluation-sec-ind'
import { Grid, Box, Button } from '@mui/material'
import { SwitchComponent } from '@presentation/components/switch-component/switch'
import React from 'react'
import { RangeComponent } from '@presentation/pages/evaluation/components/pitch/components/range'
import { QuizComponent } from '@presentation/pages/evaluation/components/pitch/components/quiz'

type Props = {
  setStatusEnt: (status: boolean) => void
  statusEnt: boolean
  dscEstado: string
  entrevistaEvalSecInd: ParticipantEvaluationSecInd[]
  changeResponse: (score: number, id: number) => void
}

function Entrevista({
  setStatusEnt,
  changeResponse,
  statusEnt,
  dscEstado,
  entrevistaEvalSecInd
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
              onChange={setStatusEnt}
              value={statusEnt}
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
        <Box width="100%" padding="10px">
          <Box maxWidth="50%">
            {entrevistaEvalSecInd && (
              <>
                <RangeComponent />
                {entrevistaEvalSecInd.map((val, index) => (
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
        </Box>
      </Grid>
    </Grid>
  )
}

export default Entrevista
