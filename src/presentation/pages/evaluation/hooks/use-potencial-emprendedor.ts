import { useContext, useEffect, useState } from 'react'
import { ParticipantEvaluationSec } from '@domain/project/models/participant-evaluation-sec'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { ParticipantEvaluation } from '@domain/project'

function usePotencialEmprendedor(evaluation: ParticipantEvaluation) {
  const { statusEM, setStatusEM } = useContext(ParameterManageContext)
  const [dscEstadoEM, setDscEstadoEM] = useState<string>('')
  const [evalSec, setEvalSec] = useState<ParticipantEvaluationSec[]>([])

  useEffect(() => {
    if (evaluation) {
      setEvalSec([...evaluation.listProyectoParticipanteEvalSec])
    }
  }, [evaluation])

  useEffect(() => {
    if (evaluation) {
      setStatusEM(evaluation.idEstado === '00002')
    }
  }, [evaluation])

  useEffect(() => {
    if (evaluation) {
      setDscEstadoEM(evaluation.dscEstado)
    }
  }, [evaluation])

  return { statusEM, setStatusEM, dscEstadoEM, evalSec }
}

export { usePotencialEmprendedor }
