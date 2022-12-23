import { useMutation } from '@tanstack/react-query'

import { ProjectRepository, ProjectRequest } from '@domain/project'

const useCreateProject = (repository: ProjectRepository) => {
  return useMutation((project: ProjectRequest) => repository.create(project))
}
export default useCreateProject
