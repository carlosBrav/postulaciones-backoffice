import React, { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import FormTab from '@presentation/components/form-tab'
import EvaluacionPreliminar from '@presentation/pages/evaluation/components/evaluacion-preliminar'
import PotencialEmprendedor from '@presentation/pages/evaluation/components/potencial-emprendedor'
import Pitch from '@presentation/pages/evaluation/components/pitch'
import Entrevista from '@presentation/pages/evaluation/components/entrevista'
import { useGetEvaluations } from '@main/adapters/project/use-get-evaluations'
import { ButtonComponent } from '@presentation/components/button'
import {
  Participante,
  ParticipantEvaluation,
  ProjectRepository,
  UpdateParticipanteProyecto
} from '@domain/project'
import { useNavigate, useParams } from 'react-router-dom'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import HeaderComponent from '@presentation/components/header'
import { ParameterManageContext } from '../context/parameter-context'
import SelectComponent from '@presentation/components/select/select'
import { ProyectoParticipanteItem } from '@domain/project/models/proyecto-participante-item'
import { ProyectoParticiapnteItemEval } from '@domain/project/models/proyecto-participante-item-val'
import { ProyectoParticiapnteItemEvalSec } from '@domain/project/models/proyecto-participante-item-sec'
import { ProyectoParticipanteEvalInd } from '@domain/project/models/proyecto-participante-eval-ind'
import { useUpdateParticipant } from '@main/adapters/project/use-update-participant'
import { toast } from 'react-hot-toast'

const titles_tab = [
  'EVALUACION PRELIMINAR',
  'POTENCIAL EMPRENDEDOR',
  'PITCH',
  'ENTREVISTA'
]

type Props = {
  repository: ProjectRepository
}

function Evaluation({ repository }: Props) {
  const {
    listParticipantsProject,
    listStatusParticipant,
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
    entrevistaEvalSecInd
  } = useContext(ParameterManageContext)
  let toastId: string
  const params = useParams()
  const navigate = useNavigate()
  const { idProyecto, idParticipante } = params
  const [participantData, setParticipantData] = useState<Participante>()
  const [statusParticipant, setStatusParticipant] = useState<string>('')

  // const { isLoading, isSuccess, data, refetch } = useGetEvaluations(
  //   idParticipante as string,
  //   idProyecto as string,
  //   repository
  // )

  const { isLoading, isSuccess, data, mutate } = useGetEvaluations(
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

    const itemVal1 = new ProyectoParticiapnteItemEval()
    itemVal1.idEvaluacion = 1
    itemVal1.idEstado = statusEP ? '00002' : '00001'
    itemVal1.idTipo = '00001'
    itemVal1.score = evaluation1?.score as number

    const itemVal2 = new ProyectoParticiapnteItemEval()
    itemVal2.idEvaluacion = 2
    itemVal2.idEstado = statusEP ? '00002' : '00001'
    itemVal2.idTipo = '00002'
    itemVal2.score = evaluation2?.score as number

    const itemVal3 = new ProyectoParticiapnteItemEval()
    itemVal3.idEvaluacion = 3
    itemVal3.idEstado = statusEM ? '00002' : '00001'
    itemVal3.idTipo = '00003'
    ////////////////////////////////
    const itemVal4 = new ProyectoParticiapnteItemEval()
    itemVal4.idEvaluacion = 4
    itemVal4.idEstado = statusPitch ? '00002' : '00001'
    itemVal4.idTipo = '00004'

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
    const itemVal5 = new ProyectoParticiapnteItemEval()
    itemVal5.idEvaluacion = 5
    itemVal5.idEstado = statusEnt ? '00002' : '00001'
    itemVal5.idTipo = '00005'
    itemVal5.score = evaluation5?.score as number

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
    console.log('updateProyParticp ', JSON.stringify(updateProyParticp))
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

  return isLoading ? (
    <FullScreenLoader />
  ) : (
    <>
      <HeaderComponent
        title="EVALUACION DE PARTICIPANTE"
        onClick={goToProjects}
        titleButton="Regresar"
      />
      <Box width="100%" marginTop="30px" display="flex" flexDirection="column">
        <Box width="100%" display="flex" flexDirection="row">
          {titles_tab.map((val, index) => (
            <FormTab
              key={index}
              text={val}
              isSelected={tab === index}
              onClick={() => setTab(index)}
            />
          ))}
        </Box>
        <Box width="100%" display="flex" flexDirection="column">
          <Box
            width="100%"
            padding="20px 10px 10px 10px"
            style={{ border: '1px solid rgba(0, 0, 0, 0.12)' }}
          >
            {tab === 0 && (
              <EvaluacionPreliminar
                evaluation1={evaluation1 as ParticipantEvaluation}
                evaluation2={evaluation2 as ParticipantEvaluation}
              />
            )}
            {tab === 1 && (
              <PotencialEmprendedor
                evaluation={evaluation3 as ParticipantEvaluation}
              />
            )}
            {tab === 2 && (
              <Pitch evaluation={evaluation4 as ParticipantEvaluation} />
            )}
            {tab === 3 && (
              <Entrevista evaluation={evaluation5 as ParticipantEvaluation} />
            )}
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            marginTop="20px"
          >
            <Box maxWidth="150px">
              <ButtonComponent
                variant="contained"
                type="button"
                title="Guardar"
                onClick={handleOnSave}
                disabled={isLoadingUpdateParticipant}
              />
            </Box>
            <Box maxWidth="200px" width="100%">
              <SelectComponent
                data={listStatusParticipant}
                idLabel="estado_particip_proj_label"
                idSelect="estado_particip_proj_select"
                onChange={setStatusParticipant}
                value={statusParticipant}
                placeholder="Estado"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Evaluation
