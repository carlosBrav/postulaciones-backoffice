import { useQuery } from '@tanstack/react-query'
import { ProjectRepository } from '@domain/project'

function useGetByIdProject(repository: ProjectRepository, projectId: string) {
  console.log('projectid ', projectId)
  console.log('projectid ', !!projectId)
  return useQuery(
    ['projects-by-id', projectId],
    () => repository.getById(projectId),
    {
      enabled: !!projectId
    }
  )
}

export { useGetByIdProject }
