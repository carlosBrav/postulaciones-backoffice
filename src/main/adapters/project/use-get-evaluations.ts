import { ProjectRepository } from '@domain/project'
import { useQuery, useMutation } from '@tanstack/react-query'
import React from 'react'

function useGetEvaluations(
  idParticipant: string,
  idProject: string,
  repository: ProjectRepository
) {
  // return useQuery(
  //   ['get-evaluations', idParticipant, idProject],
  //   () => repository.getResultsByParticipant(idParticipant, idProject),
  //   {
  //     enabled: !!idParticipant && !!idProject,
  //     cacheTime: 0.0
  //   }
  // )
  return useMutation(() =>
    repository.getResultsByParticipant(idParticipant, idProject)
  )
}
export { useGetEvaluations }
