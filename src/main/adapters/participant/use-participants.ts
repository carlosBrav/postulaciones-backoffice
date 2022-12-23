import { useMutation } from '@tanstack/react-query'

import { ParticipantRepository } from '@domain/participant'

const useParticipants = (repository: ParticipantRepository) => {
  return useMutation(() => repository.getAll())
}
export default useParticipants
