import { useMutation } from '@tanstack/react-query'

import {
  ProjectParticipantCreateReq,
  ProjectParticipantDeleteRequest,
  ProjectRepository
} from '@domain/project'

const useDeleteParticipants = (repository: ProjectRepository) => {
  return useMutation((participants: ProjectParticipantDeleteRequest) =>
    repository.deleteParticipants(participants)
  )
}
export { useDeleteParticipants }
