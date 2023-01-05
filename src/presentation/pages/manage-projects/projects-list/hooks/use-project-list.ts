import { useContext, useEffect, useState } from 'react'
import useProjects from '@main/adapters/project/use-projects'
//import useProfilesDelete from '@main/adapters/profile/use-profile-delete'
//import { Profile, ProfileRepository } from '@domain/profiles'
import { useNavigate } from 'react-router-dom'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'
import { ProjectResponse, ProjectRepository } from '@domain/project'
import { useDeleteProject } from '@main/adapters/project/use-delete-project'
import { toast } from 'react-hot-toast'

export default function useProjectList(repository: ProjectRepository) {
  const { getAuthToken } = useAuthToken()
  let toastId: string
  const authToken = getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH as string)
  const {
    data: projects,
    mutate: mutateProjects,
    isLoading: isLoadingProjects,
    isSuccess: isSuccessProjects
  } = useProjects(repository)

  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [projectsSelected, setProjectsSelected] = useState<any[]>([])
  const { listProjects, setListProjects } = useContext(ParameterManageContext)

  const {
    isLoading: isLoadingDelete,
    isSuccess: isSuccessDelete,
    mutate: mutateDelete
  } = useDeleteProject(repository, `${authToken?.idUsuario}`)

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

  const handleDeleteProject = () => {
    mutateDelete(projectsSelected.map((project) => `${project.idProyecto}`))
  }

  useEffect(() => {
    if (isLoadingDelete) {
      toastId = toast.loading('Eliminando proyecto...')
    }
  }, [isLoadingDelete])

  useEffect(() => {
    if (isSuccessDelete) {
      toast.dismiss(toastId)
      toast.success('Proyecto eliminado')
      mutateProjects()
    }
  }, [isSuccessDelete])

  return {
    isLoadingProjects,
    //isLoadingDelete,
    goToCreate,
    listProjects,
    projectsSelected,
    setProjectsSelected,
    handleDeleteProject,
    goToEdit,
    setOpenDelete,
    //handleDeleteProfile,
    openDelete
  }
}
