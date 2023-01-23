import { useQuery } from '@tanstack/react-query'
import { ProjectRepository } from '@domain/project'

function useGetByIdProject(repository: ProjectRepository, projectId: string) {
  return useQuery(
    ['projects-by-id', projectId],
    () => repository.getById(projectId),
    {
      enabled: !!projectId
    }
  )
}

export { useGetByIdProject }
