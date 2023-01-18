import React from 'react'
import { Box } from '@mui/material'
import { ButtonComponent } from '@presentation/components/button'
import useFormProject from '@presentation/pages/manage-projects/projects-new/components/project-form/hooks/use-form-project'
import './styles.scss'
import FormTab from '@presentation/components/form-tab'
import { ProjectRepository } from '@domain/project'
import { FormGeneral } from '@presentation/pages/manage-projects/projects-new/components/project-form/components/form-general'
import { FormParticipants } from '@presentation/pages/manage-projects/projects-new/components/project-form/components/form-participants'
import { titles_tab, Tab } from '@presentation/pages/manage-projects/constants'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'

type Props = {
  repository: ProjectRepository
  id?: string
}

function ProjectForm({ repository, id = '' }: Props) {
  const {
    handleSubmit,
    onSubmit,
    setTab,
    control,
    errors,
    handleAddParticipants,
    handleDeleteParticipants,
    handleEmailParticipants,
    participantsProject,
    idCurrentUsuario,
    tab,
    isLoading,
    idEstado
  } = useFormProject({ repository })

  return isLoading ? (
    <FullScreenLoader />
  ) : (
    <Box width="100%" marginTop="30px" display="flex" flexDirection="column">
      <Box width="100%" display="flex" flexDirection="row">
        {titles_tab.map((val, index) => (
          <FormTab
            key={index}
            text={val.label}
            isSelected={tab === index}
            onClick={() => setTab(index)}
            disabled={index > 0 ? !id : val.disabled}
          />
        ))}
      </Box>
      <form className="form-user" onSubmit={handleSubmit(onSubmit)}>
        <Box width="100%" display="flex" flexDirection="column">
          <Box
            width="100%"
            padding="20px 10px 10px 10px"
            style={{ border: '1px solid rgba(0, 0, 0, 0.12)' }}
          >
            {tab === 0 && (
              <FormGeneral
                estado={idEstado}
                control={control}
                errors={errors}
              />
            )}
            {tab === 1 && (
              <FormParticipants
                handleAddParticipants={handleAddParticipants}
                id={id}
                participantes={participantsProject}
                idCurrentUsuario={idCurrentUsuario}
                handleDeleteParticipants={handleDeleteParticipants}
                handleEmailParticipants={handleEmailParticipants}
                disabledActions={idEstado === '00002'}
              />
            )}
          </Box>
          {tab === 0 && (
            <Box width="100%" marginTop="30px">
              <Box maxWidth="150px">
                <ButtonComponent
                  variant="contained"
                  type="submit"
                  title="Guardar"
                  disabled={idEstado === '00002'}
                />
              </Box>
            </Box>
          )}
        </Box>
      </form>
    </Box>
  )
}

export default ProjectForm
