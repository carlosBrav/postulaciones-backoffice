import { AuthenticationManageContext } from '@presentation/pages/authentication/context/authentication-context'
import { useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationFormLogin } from '@presentation/pages/authentication/login/components/form-right/components/form/validations/validations-form'
import useLogin from '@main/adapters/authentication/use-login'
import { AuthenticationRepository } from '@domain/authentication/repositories/authentication-repository'
import {UserRequest} from '@domain/authentication/models/user-request'
import {useNavigate} from 'react-router-dom'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'

function useFormLogin(auth: AuthenticationRepository) {
  const navigate = useNavigate()
  const { mutate, isSuccess, data, isError, error } = useLogin(auth)
  const [errorAuth, setErrorAuth] = useState<boolean>(false)
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    watch
  } = useForm({
    resolver: yupResolver(validationFormLogin),
    defaultValues: {
      document_type: '',
      document_number: '',
      password: ''
    }
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

  const { document_number, document_type } = watch()

  useEffect(()=>{
    if(isSuccess){
      setErrorAuth(false)
      handleSignIn(data)
      navigate('/dashboard')
    }
  },[isSuccess])

  useEffect(() => {
    if (isError) {
      setErrorAuth(true)
    }
  }, [isError])

  console.log('data error ', error)


  return {
    onSubmit,
    handleSubmit,
    getValues,
    setValue,
    errors,
    control,
    type_document,
    errorAuth,
    document_number,
    document_type
  }
}

export default useFormLogin
