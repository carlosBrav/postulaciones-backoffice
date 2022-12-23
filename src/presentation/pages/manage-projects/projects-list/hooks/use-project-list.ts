import { useContext, useEffect, useState } from 'react'
import useProjects from '@main/adapters/project/use-projects'
//import useProfilesDelete from '@main/adapters/profile/use-profile-delete'
//import { Profile, ProfileRepository } from '@domain/profiles'
import { useNavigate, useParams } from 'react-router-dom'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'
import { ProjectResponse, ProjectRepository } from '@domain/project'

export default function useProjectList(repository: ProjectRepository) {
  const { getAuthToken } = useAuthToken()
  const {
    data: projects,
    mutate: mutateProjects,
    isLoading: isLoadingProjects,
    isSuccess: isSuccessProjects
  } = useProjects(repository)

  // const {
  //   isLoading: isLoadingDelete,
  //   isSuccess: isSuccessDelete,
  //   mutate: mutateDelete
  // } = useProfilesDelete(repository,`${getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH as string)?.idUsuario}`)

  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [projectsSelected, setProjectsSelected] = useState<any[]>([])
  const { listProjects, setListProjects } = useContext(ParameterManageContext)

  const navigate = useNavigate()
  const goToEdit = () => {
    navigate(`edit/${projectsSelected[0].idProyecto}`)
  }
  const goToCreate = () => {
    navigate(`new`)
  }

  useEffect(() => {
    if (isSuccessProjects) {
      setListProjects(projects as ProjectResponse[])
    }
  }, [isSuccessProjects])

  useEffect(() => {
    mutateProjects()
  }, [])

  // const handleDeleteProfile = () => {
  //   mutateDelete(contentsSelected)
  // }

  // useEffect(() => {
  //   if (isSuccessDelete) {
  //     setOpenDelete(false)
  //     setListProfiles(listProfiles.filter((val)=> !contentsSelected.find((data)=> data.idPerfil === val.idPerfil)))
  //     setContentsSelected([])
  //   }
  // }, [isSuccessDelete])

  return {
    isLoadingProjects,
    //isLoadingDelete,
    goToCreate,
    listProjects,
    projectsSelected,
    setProjectsSelected,
    goToEdit,
    setOpenDelete,
    //handleDeleteProfile,
    openDelete
  }
}
