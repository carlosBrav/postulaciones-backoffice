import { useMutation } from '@tanstack/react-query'

import { ProjectParticipantCreateReq, ProjectRepository } from '@domain/project'

const useAddParticipants = (repository: ProjectRepository) => {
  return useMutation((project: ProjectParticipantCreateReq) =>
    repository.addParticipants(project)
  )
}
export { useAddParticipants }
