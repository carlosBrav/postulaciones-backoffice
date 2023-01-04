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
  ProjectRepository
} from '@domain/project'
import { useNavigate, useParams } from 'react-router-dom'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import HeaderComponent from '@presentation/components/header'
import { ParameterManageContext } from '../context/parameter-context'
import SelectComponent from '@presentation/components/select/select'

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
  const { listParticipantsProject, listStatusParticipant } = useContext(
    ParameterManageContext
  )
  const params = useParams()
  const navigate = useNavigate()
  const { idProyecto, idParticipante } = params
  const [participantData, setParticipantData] = useState<Participante>()
  const [statusParticipant, setStatusParticipant] = useState<string>('')

  const [evaluation1, setEvaluation1] = useState<ParticipantEvaluation>()
  const [evaluation2, setEvaluation2] = useState<ParticipantEvaluation>()
  const [evaluation3, setEvaluation3] = useState<ParticipantEvaluation>()
  const [evaluation4, setEvaluation4] = useState<ParticipantEvaluation>()
  const [evaluation5, setEvaluation5] = useState<ParticipantEvaluation>()

  const { isLoading, isSuccess, data } = useGetEvaluations(
    idParticipante as string,
    idProyecto as string,
    repository
  )

  useEffect(() => {
    if (isSuccess) {
      setEvaluation1(data?.find((val) => val.idTipo === '00001'))
      setEvaluation2(data?.find((val) => val.idTipo === '00002'))
      setEvaluation3(data?.find((val) => val.idTipo === '00003'))
      setEvaluation4(data?.find((val) => val.idTipo === '00004'))
      setEvaluation5(data?.find((val) => val.idTipo === '00005'))
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

  console.log('participantData ', participantData)
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
                onClick={() => {}}
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
