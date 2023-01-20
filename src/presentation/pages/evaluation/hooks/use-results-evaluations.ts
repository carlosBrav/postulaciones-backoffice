import {
  Participante,
  ParticipantEvaluation,
  ProjectRepository,
  UpdateParticipanteProyecto
} from '@domain/project'
import { ProyectoParticipanteEvalInd } from '@domain/project/models/proyecto-participante-eval-ind'
import { ProyectoParticipanteItem } from '@domain/project/models/proyecto-participante-item'
import { ProyectoParticiapnteItemEvalSec } from '@domain/project/models/proyecto-participante-item-sec'
import { ProyectoParticipanteItemEval } from '@domain/project/models/proyecto-participante-item-val'
import { useGetEvaluations } from '@main/adapters/project/use-get-evaluations'
import { useUpdateParticipant } from '@main/adapters/project/use-update-participant'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'

function useResultsEvaluations(repository: ProjectRepository) {
  const { getAuthToken } = useAuthToken()
  const {
    listParticipantsProject,
    evaluation1,
    setEvaluation1,
    evaluation2,
    setEvaluation2,
    evaluation3,
    setEvaluation3,
    evaluation4,
    setEvaluation4,
    evaluation5,
    setEvaluation5,
    statusEM,
    statusEP,
    statusEnt,
    statusPitch,
    pitchEvalSecInd,
    entrevistaEvalSecInd,
    listStatusParticipant
  } = useContext(ParameterManageContext)
  let toastId: string
  const params = useParams()
  const navigate = useNavigate()
  const { idProyecto, idParticipante } = params
  const [participantData, setParticipantData] = useState<Participante>()
  const [statusParticipant, setStatusParticipant] = useState<string>('')

  const {
    isLoading: isLoadingEvaluations,
    isSuccess,
    data,
    mutate
  } = useGetEvaluations(
    idParticipante as string,
    idProyecto as string,
    repository
  )

  const {
    isLoading: isLoadingUpdateParticipant,
    isSuccess: isSuccessUpdateParticipant,
    mutate: mutateUpdateParticipant
  } = useUpdateParticipant(repository)

  useEffect(() => {
    if (idParticipante && idProyecto) {
      mutate()
    }
  }, [idProyecto, idParticipante])

  useEffect(() => {
    if (isSuccess) {
      setEvaluation1(
        data?.find((val) => val.idTipo === '00001') as ParticipantEvaluation
      )
      setEvaluation2(
        data?.find((val) => val.idTipo === '00002') as ParticipantEvaluation
      )
      setEvaluation3(
        data?.find((val) => val.idTipo === '00003') as ParticipantEvaluation
      )
      setEvaluation4(
        data?.find((val) => val.idTipo === '00004') as ParticipantEvaluation
      )
      setEvaluation5(
        data?.find((val) => val.idTipo === '00005') as ParticipantEvaluation
      )
    }
  }, [isSuccess])

  useEffect(() => {
    if (idParticipante) {
      setParticipantData(
        listParticipantsProject.find(
          (val) => `${val.idParticipante}` === idParticipante
        )
      )
    }
  }, [idParticipante])

  useEffect(() => {
    if (participantData) {
      setStatusParticipant(participantData.idResultado)
    }
  }, [participantData])

  const goToProjects = () => {
    navigate(`/dashboard/manage-projects/edit/${idProyecto}`)
  }

  const [tab, setTab] = useState<number>(0)

  const handleOnSave = () => {
    const updateProyParticp = new UpdateParticipanteProyecto()
    updateProyParticp.idProyecto = +`${idProyecto}`
    updateProyParticp.idUsuMod = getAuthToken(
      import.meta.env.VITE_APP_PARAM_AUTH as string
    )?.idUsuario as number
    const item = new ProyectoParticipanteItem()
    item.idParticipante = +`${idParticipante}`
    item.idEstado =
      statusEM &&
      statusEP &&
      statusEnt &&
      statusPitch &&
      statusParticipant !== '00003'
        ? '00003'
        : '00002'
    item.idResultado = statusParticipant

    const itemVal1 = new ProyectoParticipanteItemEval()
    itemVal1.idEvaluacion = 1
    itemVal1.idEstado = statusEP ? '00002' : '00001'
    itemVal1.idTipo = '00001'
    itemVal1.score = evaluation1?.score as number

    const itemVal2 = new ProyectoParticipanteItemEval()
    itemVal2.idEvaluacion = 2
    itemVal2.idEstado = statusEP ? '00002' : '00001'
    itemVal2.idTipo = '00002'
    itemVal2.score = evaluation2?.score as number

    const itemVal3 = new ProyectoParticipanteItemEval()
    itemVal3.idEvaluacion = 3
    itemVal3.idEstado = statusEM ? '00002' : '00001'
    itemVal3.idTipo = '00003'
    itemVal3.score = null
    ////////////////////////////////
    const itemVal4 = new ProyectoParticipanteItemEval()
    itemVal4.idEvaluacion = 4
    itemVal4.idEstado = statusPitch ? '00002' : '00001'
    itemVal4.idTipo = '00004'
    itemVal4.score = null

    let itemEvalSec4: ProyectoParticiapnteItemEvalSec[] = []
    evaluation4?.listProyectoParticipanteEvalSec.forEach((val) => {
      const evalSec = new ProyectoParticiapnteItemEvalSec()
      evalSec.idSeccion = val.idSeccion
      evalSec.factor = val.factor
      let evalSecInd: ProyectoParticipanteEvalInd[] = []
      pitchEvalSecInd.forEach((secInd) => {
        const evalInd = new ProyectoParticipanteEvalInd()
        evalInd.idIndicador = secInd.idIndicador
        evalInd.respuesta = secInd.respuesta
        evalSecInd.push(evalInd)
      })
      evalSec.listProyectoParticipanteEvalSecInd = [...evalSecInd]
      itemEvalSec4.push(evalSec)
    })
    itemVal4.listProyectoParticipanteEvalSec = [...itemEvalSec4]

    ////////////////////////////////
    const itemVal5 = new ProyectoParticipanteItemEval()
    itemVal5.idEvaluacion = 5
    itemVal5.idEstado = statusEnt ? '00002' : '00001'
    itemVal5.idTipo = '00005'
    //itemVal5.score = evaluation5?.score as number
    itemVal5.score = null

    let itemEvalSec5: ProyectoParticiapnteItemEvalSec[] = []
    evaluation5?.listProyectoParticipanteEvalSec.forEach((val) => {
      const evalSec = new ProyectoParticiapnteItemEvalSec()
      evalSec.idSeccion = val.idSeccion
      evalSec.factor = val.factor
      let evalSecInd: ProyectoParticipanteEvalInd[] = []
      entrevistaEvalSecInd.forEach((secInd) => {
        const evalInd = new ProyectoParticipanteEvalInd()
        evalInd.idIndicador = secInd.idIndicador
        evalInd.respuesta = secInd.respuesta
        evalSecInd.push(evalInd)
      })
      evalSec.listProyectoParticipanteEvalSecInd = [...evalSecInd]
      itemEvalSec5.push(evalSec)
    })
    itemVal5.listProyectoParticipanteEvalSec = [...itemEvalSec5]

    item.listProyectoParticipanteEval = [
      itemVal1,
      itemVal2,
      itemVal3,
      itemVal4,
      itemVal5
    ]
    updateProyParticp.listProyectoParticipante = [item]
    //console.log('update proy particip ', updateProyParticp)
    mutateUpdateParticipant(updateProyParticp)
  }

  useEffect(() => {
    if (isLoadingUpdateParticipant) {
      toastId = toast.loading('Actualizando datos del participante...')
    }
  }, [isLoadingUpdateParticipant])

  useEffect(() => {
    if (isSuccessUpdateParticipant) {
      toast.dismiss(toastId)
      toast.success('Datos del participante actualizado')
      mutate()
    }
  }, [isSuccessUpdateParticipant])

  return {
    goToProjects,
    setTab,
    handleOnSave,
    setStatusParticipant,
    tab,
    evaluation1,
    evaluation2,
    evaluation3,
    evaluation4,
    evaluation5,
    isLoadingUpdateParticipant,
    isLoadingEvaluations,
    listStatusParticipant,
    statusParticipant
  }
}

export { useResultsEvaluations }
