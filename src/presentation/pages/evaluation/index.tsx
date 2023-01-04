import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import FormTab from '@presentation/components/form-tab'
import EvaluacionPreliminar from '@presentation/pages/evaluation/components/evaluacion-preliminar'
import PotencialEmprendedor from '@presentation/pages/evaluation/components/potencial-emprendedor'
import Pitch from '@presentation/pages/evaluation/components/pitch'
import Entrevista from '@presentation/pages/evaluation/components/entrevista'
import { useGetEvaluations } from '@main/adapters/project/use-get-evaluations'
import {} from '@main/adapters/parameter/use-criteria'
import { ParticipantEvaluation, ProjectRepository } from '@domain/project'
import { useNavigate, useParams } from 'react-router-dom'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import HeaderComponent from '@presentation/components/header'

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
  const params = useParams()
  const navigate = useNavigate()
  const { idProyecto, idParticipante } = params

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

  const goToProjects = () => {
    navigate(`/dashboard/manage-projects/edit/${idProyecto}`)
  }

  const [tab, setTab] = useState<number>(0)
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
        </Box>
      </Box>
    </>
  )
}

export default Evaluation
