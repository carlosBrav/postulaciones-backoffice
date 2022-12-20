import { useMutation, useQuery } from '@tanstack/react-query'

import { ProfileRepository } from '@domain/profiles'

const useProfile = (repository: ProfileRepository) => {
  return useMutation(() =>
    repository.getAll()
  )
}
export default useProfile
