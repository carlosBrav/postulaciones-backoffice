import { useQuery } from '@tanstack/react-query'
import { ProjectRepository } from '@domain/project'

function useGetParticipants(repository: ProjectRepository, projectId: string) {
  return useQuery(
    ['projects-participants', projectId],
    () => repository.getParticipants(projectId),
    {
      enabled: !!projectId
    }
  )
}

export { useGetParticipants }
