import React from 'react'
import { Box } from '@mui/material'
import FormTab from '@presentation/components/form-tab'
import EvaluacionPreliminar from '@presentation/pages/evaluation/components/evaluacion-preliminar'
import PotencialEmprendedor from '@presentation/pages/evaluation/components/potencial-emprendedor'
import Pitch from '@presentation/pages/evaluation/components/pitch'
import Entrevista from '@presentation/pages/evaluation/components/entrevista'
import { ButtonComponent } from '@presentation/components/button'
import {
  ParticipantEvaluation,
  ProjectRepository
} from '@domain/project'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import HeaderComponent from '@presentation/components/header'
import SelectComponent from '@presentation/components/select/select'
import {useResultsEvaluations} from '@presentation/pages/evaluation/hooks/use-results-evaluations'

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
    isLoadingUpdateParticipant,
    isLoadingEvaluations,
    tab,
    evaluation1,
    evaluation2,
    evaluation3,
    evaluation4,
    evaluation5,
    listStatusParticipant,
    statusParticipant,
    handleOnSave,
    setStatusParticipant,
    goToProjects,
    setTab,
  } = useResultsEvaluations(repository)
  return isLoadingEvaluations ? (
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
