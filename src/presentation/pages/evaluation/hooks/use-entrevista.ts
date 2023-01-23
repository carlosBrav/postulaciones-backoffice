import {
  ParticipantEvaluation,
  ParticipantEvaluationSecInd
} from '@domain/project'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { useContext, useEffect, useState } from 'react'
import { cloneDeep } from 'lodash'

function useEntrevista(evaluation: ParticipantEvaluation) {
  const {
    entrevistaEvalSecInd,
    setEntrevistaEvalSecInd,
    statusEnt,
    setStatusEnt
  } = useContext(ParameterManageContext)
  const [dscEstadoEntrevista, setDscEstadoEntrevista] = useState<string>('')

  useEffect(() => {
    if (evaluation) {
      if (entrevistaEvalSecInd.length === 0) {
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

  useEffect(() => {
    if (evaluation) {
      setDscEstadoEntrevista(evaluation.dscEstado)
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

  return {
    statusEnt,
    setStatusEnt,
    changeResponse,
    entrevistaEvalSecInd,
    dscEstadoEntrevista
  }
}

export { useEntrevista }
