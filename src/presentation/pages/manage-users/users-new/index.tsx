import { UserRepository } from '@domain/user'
import React from 'react'
import FormUser from '@presentation/pages/manage-users/users-new/components/user-form'
import HeaderComponent from '@presentation/components/header'
import { useNavigate, useParams } from 'react-router-dom'

type Props = {
  repository: UserRepository
}

function UsersNew({ repository }: Props) {
  const params = useParams()
  const { id } = params
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/dashboard/manage-users')
  }
  return (
    <>
      <HeaderComponent
        title={id ? 'Actualizar Usuario' : 'Nuevo Usuario'}
        titleButton="Regresar"
        onClick={handleBack}
      />
      <FormUser repository={repository} />
    </>
  )
}

export default UsersNew
