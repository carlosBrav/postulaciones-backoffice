import { useMutation } from '@tanstack/react-query'

import { ProjectRepository, ProjectUpdate } from '@domain/project'

const useUpdateProject = (repository: ProjectRepository) => {
  return useMutation((project: ProjectUpdate) => repository.update(project))
}
export default useUpdateProject
