import { ProjectRepository, UpdateParticipanteProyecto } from '@domain/project'
import { useMutation } from '@tanstack/react-query'

const useUpdateParticipant = (repository: ProjectRepository) => {
  const mutation = useMutation((participante: UpdateParticipanteProyecto) =>
    repository.updateResultParticipant(participante)
  )
  return mutation
}
export { useUpdateParticipant }
