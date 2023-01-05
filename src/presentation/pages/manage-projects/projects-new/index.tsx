import { ProjectRepository } from '@domain/project'
import React, { useContext, useEffect } from 'react'
import FormProject from '@presentation/pages/manage-projects/projects-new/components/project-form'
import HeaderComponent from '@presentation/components/header'
import { useNavigate, useParams } from 'react-router-dom'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'

type Props = {
  repository: ProjectRepository
}

function ProjectsNew({ repository }: Props) {
  const { setPitchEvalSecInd, setEntrevistaEvalSecInd } = useContext(
    ParameterManageContext
  )
  const params = useParams()
  const { id } = params
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/dashboard/manage-projects')
  }

  useEffect(() => {
    setPitchEvalSecInd([])
    setEntrevistaEvalSecInd([])
  }, [])
  return (
    <>
      <HeaderComponent
        title={id ? 'Actualizar Proyecto' : 'Nuevo Proyecto'}
        titleButton="Regresar"
        onClick={handleBack}
      />
      <FormProject repository={repository} id={id} />
    </>
  )
}

export default ProjectsNew
