import { ParticipantEvaluation } from '@domain/project'
import { ParticipantEvaluationSecInd } from '@domain/project/models/participant-evaluation-sec-ind'
import { Grid, Box, Button } from '@mui/material'
import { SwitchComponent } from '@presentation/components/switch-component/switch'
import React, { useEffect, useState } from 'react'
import { RangeComponent } from '@presentation/pages/evaluation/components/pitch/components/range'
import { QuizComponent } from '@presentation/pages/evaluation/components/pitch/components/quiz'

type Props = {
  evaluation: ParticipantEvaluation
}

function Entrevista({ evaluation }: Props) {
  const [finishTest, setFinishTest] = useState<boolean>(false)
  const [evalSecInd, setEvalSecInd] = useState<ParticipantEvaluationSecInd[]>(
    []
  )

  useEffect(() => {
    if (evaluation) {
      setEvalSecInd([
        ...evaluation.listProyectoParticipanteEvalSec[0]
          .listProyectoParticipanteEvalSecInd
      ])
    }
  }, [evaluation])
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
              onChange={setFinishTest}
              value={finishTest}
              label="Completar Prueba"
            />
          </Box>
          <Box maxWidth="200px">
            <Button variant="outlined" color="success">
              {evaluation ? evaluation.dscEstado : ''}
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box width="100%" padding="10px">
          <Box maxWidth="50%">
          {evalSecInd && (
            <>
              <RangeComponent />
              {evalSecInd.map((val, index) => (
                <QuizComponent
                  key={index}
                  id={index}
                  title={val.dscIndicador}
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
