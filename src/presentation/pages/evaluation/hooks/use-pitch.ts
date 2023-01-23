import {
  ParticipantEvaluation,
  ParticipantEvaluationSecInd
} from '@domain/project'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { useContext, useEffect, useState } from 'react'
import { cloneDeep } from 'lodash'

function usePitch(evaluation: ParticipantEvaluation) {
  const { pitchEvalSecInd, setPitchEvalSecInd, statusPitch, setStatusPitch } =
    useContext(ParameterManageContext)

  const [evaluate, setEvaluate] = useState<ParticipantEvaluation>()
  const [dscPitch, setDscPitch] = useState<string>('')

  useEffect(() => {
    if (evaluation) {
      setEvaluate(cloneDeep(evaluation))
      if (pitchEvalSecInd.length === 0) {
        setPitchEvalSecInd([
          ...evaluation.listProyectoParticipanteEvalSec[0]
            .listProyectoParticipanteEvalSecInd
        ])
      }
    }
  }, [evaluation])

  useEffect(() => {
    if (evaluation) {
      setStatusPitch(evaluation.idEstado === '00002')
    }
  }, [evaluation])

  useEffect(() => {
    if (evaluation) {
      setDscPitch(evaluation.dscEstado)
    }
  }, [evaluation])

  const changeResponse = (score: number, id: number) => {
    const findData = pitchEvalSecInd.find((val) => val.idIndicador === id)
    const indexResponse = pitchEvalSecInd.indexOf(
      findData as ParticipantEvaluationSecInd
    )
    const cloneResponse = cloneDeep(pitchEvalSecInd)
    cloneResponse[indexResponse].respuesta = score
    setPitchEvalSecInd(cloneResponse)
  }

  return {
    pitchEvalSecInd,
    setPitchEvalSecInd,
    statusPitch,
    setStatusPitch,
    changeResponse,
    evaluate,
    dscPitch
  }
}

export { usePitch }
