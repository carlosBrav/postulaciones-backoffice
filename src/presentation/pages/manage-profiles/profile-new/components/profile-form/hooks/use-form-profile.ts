import { ProfileRepository, ProfileForm, ProfileCreateRequest, ProfileEditRequest, Profile } from '@domain/profiles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useProfileCreate from '@main/adapters/profile/use-profile-create'
import useProfileEdit from '@main/adapters/profile/use-profile-edit'
import { validateProfileForm } from '@presentation/pages/manage-profiles/profile-new/components/profile-form/hooks/use-validate-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'

type Props = {
  repository: ProfileRepository
}

export default function useFormProfile({ repository }: Props) {
  const { getAuthToken } = useAuthToken()
  const params = useParams()
  const { id } = params
  let toastId: string
  const navigate = useNavigate()
  const { listProfiles } = useContext(ParameterManageContext)

  const {
    isLoading: isLoadingCreate,
    isSuccess: isSuccessCreate,
    mutate: mutateCreate,
  } = useProfileCreate(repository)
  const {
    isLoading: isLoadingEdit,
    isSuccess: isSuccessEdit,
    mutate: mutateEdit,
  } = useProfileEdit(repository)
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(validateProfileForm),
    defaultValues: new ProfileForm(),
  })
  
  const onSubmit = (data: ProfileForm) => {
    const authToken = getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH)
    if(!id){
      const createProfile = ProfileCreateRequest.fromJson({
        nombre: data.nombre,
        observacion: '',
        idUsuCrea: authToken?.idUsuario
      }) as ProfileCreateRequest
      mutateCreate(createProfile)
    }else{
      const editProfile = ProfileEditRequest.fromJson({
        nombre: data.nombre,
        observacion: '',
        idUsuCrea: authToken?.idUsuario,
        idPerfil: id
      }) as ProfileEditRequest
      mutateEdit(editProfile)
    }
  }

  useEffect(() => {
    if (isLoadingCreate) {
      toastId = toast.loading('Creando perfil...')
    }
  }, [isLoadingCreate])

  useEffect(() => {
    if (isSuccessCreate) {
      toast.dismiss(toastId)
      toast.success('Perfil creado')
      navigate('/dashboard/manage-profiles')
    }
  }, [isSuccessCreate])

  useEffect(() => {
    if (isLoadingEdit) {
      toastId = toast.loading('Actualizando perfil...')
    }
  }, [isLoadingEdit])

  useEffect(() => {
    if (isSuccessEdit) {
      toast.dismiss(toastId)
      toast.success('Perfil actualizado')
      navigate('/dashboard/manage-profiles')
    }
  }, [isSuccessEdit])

  useEffect(()=>{
    if(id){
      const profileFilter = listProfiles.find((data)=> `${data.idPerfil}` === id)
      setValue("nombre",profileFilter?.nombre as string)
    }
  },[id])

  return {
    control,
    onSubmit,
    handleSubmit,
    errors,
    isLoading: isLoadingCreate || isLoadingEdit
  }
}
