import { AuthenticationManageContext } from '@presentation/pages/authentication/context/authentication-context'
import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationFormLogin } from '@presentation/pages/authentication/login/components/form-right/components/form/validations/validations-form'
import useLogin from '@main/adapters/authentication/use-login'
import { AuthenticationRepository } from '@domain/authentication/repositories/authentication-repository'
import {UserRequest} from '@domain/authentication/models/user-request'
import {useNavigate} from 'react-router-dom'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'

function useFormLogin(auth: AuthenticationRepository) {
  const navigate = useNavigate()
  const {mutate, isSuccess, data} = useLogin(auth)
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationFormLogin),
    defaultValues: {
      document_type: '',
      document_number: '',
      password: ''
    },
  })
  const { handleSignIn } = useContext(AuthenticationManageContext)
  const { type_document } = useContext(ParameterManageContext)

  const onSubmit = (data: any) => {
    const {document_type,document_number,password} = data
    mutate(UserRequest.fromJson({
      usuario:`${document_type}-${document_number}`,
      clave: password
    }))
  }

  useEffect(()=>{
    if(isSuccess){
      handleSignIn(data)
      navigate('/dashboard')
    }
  },[isSuccess])

  return {
    onSubmit,
    handleSubmit,
    getValues,
    setValue,
    errors,
    control,
    type_document
  }
}

export default useFormLogin
