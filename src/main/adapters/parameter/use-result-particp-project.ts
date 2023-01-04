import { useQuery } from '@tanstack/react-query'

import { ParameterRepository } from '@domain/parameter/repositories'
import { TYPE_PARAMETER } from '@domain/parameter/constants'

const useResultParticipant = (repository: ParameterRepository) => {
  return useQuery(['parameter-result-particp-proj'], () =>
    repository.getAll(TYPE_PARAMETER.resultado_particip_proy)
  )
}
export { useResultParticipant }
