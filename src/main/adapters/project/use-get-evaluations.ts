import { ProjectRepository } from '@domain/project'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function useGetEvaluations(
  idParticipant: string,
  idProject: string,
  repository: ProjectRepository
) {
  return useQuery(
    ['get-evaluations', idParticipant, idProject],
    () => repository.getResultsByParticipant(idParticipant, idProject),
    {
      enabled: !!idParticipant && !!idProject
    }
  )
}
export { useGetEvaluations }
