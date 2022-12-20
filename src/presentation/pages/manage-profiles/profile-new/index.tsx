import { ProfileRepository } from '@domain/profiles';
import HeaderComponent from '@presentation/components/header';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormProfile from '@presentation/pages/manage-profiles/profile-new/components/profile-form'

type Props = {
  repository: ProfileRepository
}

function ProfileNew({repository}: Props) {
  const params = useParams()
  const { id } = params
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/dashboard/manage-profiles')
  }
  return (
    <>
      <HeaderComponent
        title={id ? 'Actualizar Perfil' : 'Nuevo Perfil'}
        titleButton="Regresar"
        onClick={handleBack}
      />
      <FormProfile repository={repository} />
    </>
  )
}

export default ProfileNew;