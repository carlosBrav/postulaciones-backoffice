import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useEffect, useState } from 'react'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'
import useCreateProject from '@main/adapters/project/use-create-project'
import useUpdateProject from '@main/adapters/project/use-update-project'
import { validateProjectForm } from '../hooks/use-validation-form-project'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectRepository, ProjectForm } from '@domain/project'

type Props = {
  repository: ProjectRepository
}

function useFormProject({ repository }: Props) {
  const params = useParams()
  const { id } = params
  let toastId: string
  const navigate = useNavigate()
  const { getAuthToken } = useAuthToken()
  const {
    isLoading: isLoadingCreate,
    mutate,
    isSuccess
  } = useCreateProject(repository)

  const {
    isLoading: isLoadingUpdate,
    mutate: mutateUpdate,
    isSuccess: isSuccessUpdate
  } = useUpdateProject(repository)
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validateProjectForm),
    defaultValues: new ProjectForm()
  })
  // const { type_document, type_profiles, listUsers } = useContext(
  //   ParameterManageContext
  // )

  const onSubmit = (data: ProjectForm) => {
    console.log('data ', data)
    // const authToken = getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH)
    // if (id) {

    // } else {

    // }
  }

  useEffect(() => {
    if (isLoadingUpdate) {
      toastId = toast.loading('Actualizando proyecto...')
    }
  }, [isLoadingUpdate])

  useEffect(() => {
    if (isSuccessUpdate) {
      toast.dismiss(toastId)
      toast.success('Proyecto actualizado')
      navigate('/dashboard/manage-projects')
    }
  }, [isSuccessUpdate])

  useEffect(() => {
    if (isLoadingCreate) {
      toastId = toast.loading('Creando proyecto...')
    }
  }, [isLoadingCreate])

  useEffect(() => {
    if (isSuccess) {
      toast.dismiss(toastId)
      toast.success('Proyecto creado')
      navigate('/dashboard/manage-projects')
    }
  }, [isSuccess])

  useEffect(() => {
    if (id) {
      // const authToken = getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH)
      // const userToEdit = listUsers.find((val) => `${val.idUsuario}` === id)
      // setValue('idTipDoc', userToEdit?.idTipDoc as string)
      // setValue('idPerfil', `${userToEdit?.idPerfil}`)
      // setValue('idUsuCrea', `${authToken?.idUsuario}`)
      // setValue('numDoc', userToEdit?.numDoc as string)
      // setValue('codigo', userToEdit?.codigo as string)
      // setValue('nombre', userToEdit?.nombre as string)
      // setValue('apePat', userToEdit?.apePat as string)
      // setValue('apeMat', userToEdit?.apeMat as string)
      // setValue('email', userToEdit?.email as string)
      // setValue('celular', userToEdit?.celular as string)
      // setValue('login', userToEdit?.login as string)
      // setValue('clave', userToEdit?.clave as string)
      // setValue('file_string', userToEdit?.fotoURL as string)
      // setValue('file', userToEdit?.fotoURL as string)
    }
  }, [id])

  return {
    control,
    errors,
    // type_document,
    // type_profiles,
    // file,
    // idTipDoc,
    isLoadingCreate,
    handleSubmit,
    // handleFileChange,
    // handleFileClear,
    onSubmit
  }
}

export default useFormProject
