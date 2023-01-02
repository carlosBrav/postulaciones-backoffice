import { ParticipantEvaluation } from '@domain/project'
import { ParticipantEvaluationSec } from '@domain/project/models/participant-evaluation-sec'
import { ParticipantEvaluationSecInd } from '@domain/project/models/participant-evaluation-sec-ind'
import { Box, Button, Grid } from '@mui/material'
import { SwitchComponent } from '@presentation/components/switch-component/switch'
import { cloneDeep } from 'lodash'
import { RangeComponent } from './components/range'
import { QuizComponent } from './components/quiz'
import React, { useEffect, useState } from 'react'

type Props = {
  evaluation: ParticipantEvaluation
}

function Pitch({ evaluation }: Props) {
  const [finishTest, setFinishTest] = useState<boolean>(false)

  const [evaluate, setEvaluate] = useState<ParticipantEvaluation>()
  const [evalSec, setEvalSec] = useState<ParticipantEvaluationSec[]>([])
  const [evalSecInd, setEvalSecInd] = useState<ParticipantEvaluationSecInd[]>(
    []
  )

  useEffect(() => {
    if (evaluation) {
      setEvaluate(cloneDeep(evaluation))
      setEvalSec([...evaluation.listProyectoParticipanteEvalSec])
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Pitch
