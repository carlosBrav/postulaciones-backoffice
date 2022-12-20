import { useContext, useEffect, useState } from 'react'
import useProfiles from '@main/adapters/profile/use-profile'
import useProfilesDelete from '@main/adapters/profile/use-profile-delete'
import { Profile, ProfileRepository } from '@domain/profiles'
import { useNavigate, useParams } from 'react-router-dom'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'

export default function useProfileForm(repository: ProfileRepository){
  const { getAuthToken } = useAuthToken()
  const {
    data: profiles,
    mutate: mutateProfiles,
    isLoading: isLoadingProfiles,
    isSuccess: isSuccessProfiles,
  } = useProfiles(repository)

  const {
    isLoading: isLoadingDelete,
    isSuccess: isSuccessDelete,
    mutate: mutateDelete
  } = useProfilesDelete(repository,`${getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH as string)?.idUsuario}`)

  const navigate = useNavigate()
  const goToEdit = () => {
    navigate(`edit/${contentsSelected[0].idPerfil}`)
  }
  const goToCreate = () => {
    navigate(`new`)
  }
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [contentsSelected, setContentsSelected] = useState<any[]>([])
  const { listProfiles, setListProfiles } = useContext(ParameterManageContext)

  useEffect(() => {
    if (isSuccessProfiles) {
      setListProfiles(profiles as Profile[])
    }
  }, [isSuccessProfiles])

  useEffect(() => {
    mutateProfiles()
  }, [])

  const handleDeleteProfile = () => {
    mutateDelete(contentsSelected)
  }

  useEffect(() => {
    if (isSuccessDelete) {
      setOpenDelete(false)
      setListProfiles(listProfiles.filter((val)=> !contentsSelected.find((data)=> data.idPerfil === val.idPerfil)))
      setContentsSelected([])
    }
  }, [isSuccessDelete])
  

  return {
    isLoadingProfiles,
    isLoadingDelete,
    goToCreate,
    listProfiles,
    contentsSelected,
    setContentsSelected,
    goToEdit,
    setOpenDelete,
    handleDeleteProfile,
    openDelete
  }
}