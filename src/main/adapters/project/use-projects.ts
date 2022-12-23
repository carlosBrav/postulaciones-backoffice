import { useMutation } from '@tanstack/react-query'

import { ProjectRepository } from '@domain/project'

const useProjects = (repository: ProjectRepository) => {
  return useMutation(() => repository.getAll())
}
export default useProjects
