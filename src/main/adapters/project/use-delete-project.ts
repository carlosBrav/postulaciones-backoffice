import { useMutation } from '@tanstack/react-query'

import { ProjectRepository } from '@domain/project'

const useDeleteProject = (repository: ProjectRepository, idUsuCrea: string) => {
  return useMutation((projectsId: string[]) =>
    repository.delete(projectsId, idUsuCrea)
  )
}
export default useDeleteProject
