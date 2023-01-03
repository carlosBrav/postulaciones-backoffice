import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateUserForm } from '@presentation/pages/manage-users/users-new/components/user-form/hooks/use-validation-form'
import { UserRequest } from '@domain/user/models/uer-form-request'
import { TransformFile } from '@presentation/libs/file-convert'
import { useContext, useEffect, useState } from 'react'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'
import useCreateUser from '@main/adapters/user/use-create-user'
import useUpdateUser from '@main/adapters/user/use-update-user'
import { UserRepository, UserCreateRequest, UserEditRequest } from '@domain/user'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

type Props = {
  repository: UserRepository
}

function useFormUser({ repository }: Props) {
  const params = useParams()
  const { id } = params
  let toastId: string
  const navigate = useNavigate()
  const { getAuthToken } = useAuthToken()
  const { isLoading: isLoadingCreate, mutate, isSuccess } = useCreateUser(repository)
  const {
    isLoading: isLoadingUpdate,
    mutate: mutateUpdate,
    isSuccess: isSuccessUpdate,
  } = useUpdateUser(repository)
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateUserForm),
    defaultValues: new UserRequest(),
  })
  const { type_document, type_profiles, listUsers } = useContext(
    ParameterManageContext
  )
  const handleFileChange = async (files: FileList) => {
    if (files.length > 0) {
      setValue('file', files[0] as File)
      setValue('file_string', (await TransformFile(files[0] as File)) as string)
    }
  }
  const handleFileClear = () => {
    setValue('file', null)
    setValue('file_string', '')
  }
  const onSubmit = (data: UserRequest) => {
    const authToken = getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH)
    if(id){
      const userEditeRequestObject = new UserEditRequest()
      userEditeRequestObject.idUsuario= +id
      userEditeRequestObject.idPerfil = +data.idPerfil
      userEditeRequestObject.idUsuCrea = +(authToken?.idUsuario as number)
      userEditeRequestObject.idTipDoc = data.idTipDoc
      userEditeRequestObject.numDoc = data.numDoc
      userEditeRequestObject.codigo = data.codigo
      userEditeRequestObject.nombre = data.nombre
      userEditeRequestObject.apePat = data.apePat
      userEditeRequestObject.apeMat = data.apeMat
      userEditeRequestObject.email = data.email
      userEditeRequestObject.celular = data.celular
      userEditeRequestObject.login = data.login
      userEditeRequestObject.clave = data.clave
      if(!data.file_string.includes("https://")){
        userEditeRequestObject.fotoBase64 = data.file_string
      }
      mutateUpdate(userEditeRequestObject)
    }else{
      const userCreateRequestObject = new UserCreateRequest()
      userCreateRequestObject.idPerfil = +data.idPerfil
      userCreateRequestObject.idUsuCrea = +(authToken?.idUsuario as number)
      userCreateRequestObject.idTipDoc = data.idTipDoc
      userCreateRequestObject.numDoc = data.numDoc
      userCreateRequestObject.codigo = data.codigo
      userCreateRequestObject.nombre = data.nombre
      userCreateRequestObject.apePat = data.apePat
      userCreateRequestObject.apeMat = data.apeMat
      userCreateRequestObject.email = data.email
      userCreateRequestObject.celular = data.celular
      userCreateRequestObject.login = data.login
      userCreateRequestObject.clave = data.clave
      userCreateRequestObject.fotoBase64 = data.file_string
      mutate(userCreateRequestObject)
    }
    
  }
  const { file, idTipDoc } = watch()

  useEffect(() => {
    if (isLoadingUpdate) {
      toastId = toast.loading('Actualizando usuario...')
    }
  }, [isLoadingUpdate])

  useEffect(() => {
    if (isSuccessUpdate) {
      toast.dismiss(toastId)
      toast.success('Usuario actualizado')
      navigate('/dashboard/manage-users')
    }
  }, [isSuccessUpdate])

  useEffect(() => {
    if (isLoadingCreate) {
      toastId = toast.loading('Creando usuario...')
    }
  }, [isLoadingCreate])

  useEffect(() => {
    if (isSuccess) {
      toast.dismiss(toastId)
      toast.success('Usuario creado')
      navigate('/dashboard/manage-users')
    }
  }, [isSuccess])

  useEffect(() => {
    if (id) {
      const authToken = getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH)
      const userToEdit = listUsers.find((val) => `${val.idUsuario}` === id)
      setValue('idTipDoc', userToEdit?.idTipDoc as string)
      setValue('idPerfil', `${userToEdit?.idPerfil}`)
      setValue('idUsuCrea', `${authToken?.idUsuario}`)
      setValue('numDoc', userToEdit?.numDoc as string)
      setValue('codigo', userToEdit?.codigo as string)
      setValue('nombre', userToEdit?.nombre as string)
      setValue('apePat', userToEdit?.apePat as string)
      setValue('apeMat', userToEdit?.apeMat as string)
      setValue('email', userToEdit?.email as string)
      setValue('celular', userToEdit?.celular as string)
      setValue('login', userToEdit?.login as string)
      setValue('clave', userToEdit?.clave as string)
      setValue('file_string', userToEdit?.fotoURL as string)
      setValue('file', userToEdit?.fotoURL as string)
    }
  }, [id])

  return {
    control,
    errors,
    type_document,
    type_profiles,
    file,
    idTipDoc,
    isLoading: isLoadingCreate || isLoadingUpdate,
    handleSubmit,
    handleFileChange,
    handleFileClear,
    onSubmit
  }
}

export default useFormUser
