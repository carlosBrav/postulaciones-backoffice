import { useMutation } from '@tanstack/react-query'

import {
  ParticipantCreateRequest,
  ParticipantRepository
} from '@domain/participant'

const useCreateParticipants = (repository: ParticipantRepository) => {
  return useMutation((participant: ParticipantCreateRequest) =>
    repository.create(participant)
  )
}
export { useCreateParticipants }
