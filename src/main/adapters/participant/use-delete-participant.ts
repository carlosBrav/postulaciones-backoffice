import { useMutation } from '@tanstack/react-query'

import { ParticipantRepository } from '@domain/participant'

const useDeleteParticipant = (
  repository: ParticipantRepository,
  idUsuMod: string
) => {
  return useMutation((projects: string[]) =>
    repository.delete(projects, idUsuMod)
  )
}
export { useDeleteParticipant }
