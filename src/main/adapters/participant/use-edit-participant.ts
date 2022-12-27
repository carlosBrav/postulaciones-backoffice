import { useMutation } from '@tanstack/react-query'

import {
  ParticipantUpdateRequest,
  ParticipantRepository
} from '@domain/participant'

const useEditParticipant = (repository: ParticipantRepository) => {
  return useMutation((participant: ParticipantUpdateRequest) =>
    repository.update(participant)
  )
}
export { useEditParticipant }
