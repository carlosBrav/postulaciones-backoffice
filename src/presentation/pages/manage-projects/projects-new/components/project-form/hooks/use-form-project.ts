import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useEffect, useState } from 'react'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'
import useCreateProject from '@main/adapters/project/use-create-project'
import useUpdateProject from '@main/adapters/project/use-update-project'
import { validateProjectForm } from '../hooks/use-validation-form-project'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectRepository, ProjectForm, ProjectRequest } from '@domain/project'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import {
  Participante,
  ProjectParticipantCreateReq,
  ProjectParticipantDeleteRequest,
  ProjectUpdate
} from '@domain/project/models'
import { useGetByIdProject } from '@main/adapters/project/use-get-by-id-project'
import { useGetParticipants } from '@main/adapters/project/use-get-participants'
import { useAddParticipants } from '@main/adapters/project/use-add-participants'
import { useDeleteParticipants } from '@main/adapters/project/use-delete-participants'

type Props = {
  repository: ProjectRepository
}

function useFormProject({ repository }: Props) {
  const { setListParticipantsProject } = useContext(ParameterManageContext)
  const params = useParams()
  const { id } = params
  let toastId: string
  const [tab, setTab] = useState<number>(0)
  const [participants, setParticipants] = useState<Participante[]>([])
  const navigate = useNavigate()
  const { getAuthToken } = useAuthToken()
  const {
    isLoading: isLoadingProjById,
    isSuccess: isSuccessProjById,
    data: projectById,
    refetch: refetchById
  } = useGetByIdProject(repository, id as string)
  const {
    isLoading: isLoadingCreate,
    mutate: mutateCreate,
    isSuccess: isSuccessCreate
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
  const { idEstado } = watch()

  const authToken = getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH)

  const onSubmit = (data: ProjectForm) => {
    if  (id)  {
      const projectUpdate = ProjectUpdate.fromJson({
        idProyecto: +id,
        codigo: data.codigo,
        nombre: data.nombre,
        descripcion: data.descripcion,
        jefe: data.jefe,
        idEstado: data.idEstado,
        idUsuMod: authToken?.idUsuario
      }) as ProjectUpdate
      mutateUpdate(projectUpdate)
    }  else  {
      const projectRequest = ProjectRequest.fromJson({
        ...data
      }) as ProjectRequest
      projectRequest.idUsuCrea = authToken?.idUsuario as number
      mutateCreate(projectRequest)
    }
  }

  const {
    isLoading: isLoadingParticipantsProj,
    isSuccess: isSuccessParticipantsProj,
    data: participantsProject,
    refetch: refetchParticipantsProj
  } = useGetParticipants(repository, id as string)

  const {
    isLoading: isLoadingAddParticip,
    isSuccess: isSuccessAddParticip,
    mutate: mutateAddParticipants
  } = useAddParticipants(repository)

  const {
    isLoading: isLoadingDeleteParticip,
    isSuccess: isSuccessDeleteParticip,
    mutate: mutateDeleteParticipants
  } = useDeleteParticipants(repository)

  const handleRefetchParticProj = () => {
    refetchParticipantsProj()
  }

  const handleDeleteParticipants = (data: ProjectParticipantDeleteRequest) => {
    mutateDeleteParticipants(data)
  }

  const handleAddParticipants = (data: ProjectParticipantCreateReq) => {
    mutateAddParticipants(data)
  }

  const handleEmailParticipants = (data: ProjectParticipantCreateReq) => {
    mutateAddParticipants(data)
  }

  useEffect(() => {
    setValue('idEstado', '00001')
  }, [])


  useEffect(() => {
    if (isLoadingDeleteParticip) {
      toastId = toast.loading('Eliminando participante...')
    }
  }, [isLoadingDeleteParticip])

  useEffect(() => {
    if (isSuccessDeleteParticip) {
      toast.dismiss(toastId)
      toast.success('Participante eliminado')
      refetchParticipantsProj()
    }
  }, [isSuccessDeleteParticip])



  useEffect(() => {
    if (isLoadingAddParticip) {
      toastId = toast.loading('Agregando participante...')
    }
  }, [isLoadingAddParticip])

  useEffect(() => {
    if (isSuccessAddParticip) {
      toast.dismiss(toastId)
      toast.success('Participante agregado')
      refetchParticipantsProj()
    }
  }, [isSuccessAddParticip])

  useEffect(() => {
    if (isLoadingUpdate) {
      toastId = toast.loading('Actualizando proyecto...')
    }
  }, [isLoadingUpdate])

  useEffect(() => {
    if (isSuccessUpdate) {
      toast.dismiss(toastId)
      toast.success('Proyecto actualizado')
      refetchById()
    }
  }, [isSuccessUpdate])

  useEffect(() => {
    if (isLoadingCreate) {
      toastId = toast.loading('Creando proyecto...')
    }
  }, [isLoadingCreate])

  useEffect(() => {
    if (isSuccessCreate) {
      toast.dismiss(toastId)
      toast.success('Proyecto creado')
      navigate('/dashboard/manage-projects')
    }
  }, [isSuccessCreate])

  useEffect(() => {
    if (isSuccessProjById) {
      setValue('codigo', projectById?.codigo as string)
      setValue('nombre', projectById?.nombre as string)
      setValue('descripcion', projectById?.descripcion as string)
      setValue('jefe', projectById?.jefe as string)
      setValue('idEstado', projectById?.idEstado as string)
      setValue('flagLanding', projectById?.flagLanding as boolean)
      setParticipants(projectById?.listParticipante as Participante[])
    }
  }, [isSuccessProjById])

  useEffect(() => {
    if (isSuccessParticipantsProj) {
      setListParticipantsProject([...(participantsProject as Participante[])])
    }
  }, [isSuccessParticipantsProj])

  return {
    idEstado,
    control,
    errors,
    tab,
    participants,
    participantsProject,
    idCurrentUsuario: authToken?.idUsuario,
    isLoading:
      isLoadingCreate ||
      isLoadingUpdate ||
      isLoadingAddParticip ||
      isLoadingDeleteParticip,
    handleEmailParticipants,
    handleRefetchParticProj,
    handleAddParticipants,
    handleDeleteParticipants,
    setTab,
    handleSubmit,
    onSubmit
  }
}

export default useFormProject
