import React from 'react'
import { ParticipantRepository } from '@domain/participant'
import { useNavigate, useParams } from 'react-router-dom'
import HeaderComponent from '@presentation/components/header'
import FormParticipant from '@presentation/pages/manage-participants/participants-new/components/form-participant'

type Props = {
  repository: ParticipantRepository
}

function ParticipantsNew({ repository }: Props) {
  const params = useParams()
  const { id } = params
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/dashboard/manage-participants')
  }
  return (
    <>
      <HeaderComponent
        title={id ? 'Actualizar Participante' : 'Nuevo Participante'}
        titleButton="Regresar"
        onClick={handleBack}
      />
      <FormParticipant repository={repository} />
    </>
  )
}

export default ParticipantsNew
