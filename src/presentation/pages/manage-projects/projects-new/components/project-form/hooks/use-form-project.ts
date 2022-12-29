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
import { Participante } from '@domain/project/models'

type Props = {
  repository: ProjectRepository
}

function useFormProject({ repository }: Props) {
  const params = useParams()
  const { id } = params
  let toastId: string
  const [tab, setTab] = useState<number>(0)
  const [participants, setParticipants] = useState<Participante[]>([])
  const navigate = useNavigate()
  const { getAuthToken } = useAuthToken()
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
  const authToken = getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH)

  const { listProjects } = useContext(ParameterManageContext)

  const onSubmit = (data: ProjectForm) => {
    const projectRequest = ProjectRequest.fromJson({
      ...data
    }) as ProjectRequest
    projectRequest.idUsuCrea = authToken?.idUsuario as number
    mutateCreate(projectRequest)
  }

  useEffect(() => {
    setValue('idEstado', '00001')
  }, [])

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
    if (isSuccessCreate) {
      toast.dismiss(toastId)
      toast.success('Proyecto creado')
      navigate('/dashboard/manage-projects')
    }
  }, [isSuccessCreate])

  useEffect(()=>{
    if(id){
      const project = listProjects.find((val) => `${val.idProyecto}` === id)
      setValue("codigo",project?.codigo as string)
      setValue("nombre", project?.nombre as string)
      setValue("descripcion", project?.descripcion as string)
      setValue("jefe",project?.jefe as string)
      setValue('idEstado', project?.idEstado as string)
      setValue('flagLanding',project?.flagLanding as boolean)
      setParticipants(project?.listParticipante as Participante[])
    }
  },[id])

  return {
    control,
    errors,
    isLoadingCreate,
    tab,
    participants,
    setTab,
    handleSubmit,
    onSubmit
  }
}

export default useFormProject
