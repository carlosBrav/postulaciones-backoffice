import { ParticipantEvaluation } from '@domain/project'
import { ParticipantEvaluationSecInd } from '@domain/project/models/participant-evaluation-sec-ind'
import { Grid, Box, Button } from '@mui/material'
import { SwitchComponent } from '@presentation/components/switch-component/switch'
import React, { useContext, useEffect, useState } from 'react'
import { RangeComponent } from '@presentation/pages/evaluation/components/pitch/components/range'
import { QuizComponent } from '@presentation/pages/evaluation/components/pitch/components/quiz'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { cloneDeep } from 'lodash'

type Props = {
  evaluation: ParticipantEvaluation
}

function Entrevista({ evaluation }: Props) {
  const {
    entrevistaEvalSecInd,
    setEntrevistaEvalSecInd,
    statusEnt,
    setStatusEnt
  } = useContext(ParameterManageContext)

  useEffect(() => {
    if (evaluation) {
      if  (entrevistaEvalSecInd.length === 0)  {
        setEntrevistaEvalSecInd([
          ...evaluation.listProyectoParticipanteEvalSec[0]
            .listProyectoParticipanteEvalSecInd
        ])
      }
    }
  }, [evaluation])

  useEffect(() => {
    if (evaluation) {
      setStatusEnt(evaluation.idEstado === '00002')
    }
  }, [evaluation])

  const changeResponse = (score: number, id: number) => {
    const findData = entrevistaEvalSecInd.find((val) => val.idIndicador === id)
    const indexResponse = entrevistaEvalSecInd.indexOf(
      findData as ParticipantEvaluationSecInd
    )
    const cloneResponse = cloneDeep(entrevistaEvalSecInd)
    cloneResponse[indexResponse].respuesta = score
    setEntrevistaEvalSecInd(cloneResponse)
  }

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
              {evaluation ? evaluation.dscEstado : ''}
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
