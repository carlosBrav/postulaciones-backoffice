import { useMutation } from '@tanstack/react-query'

import { ProfileRepository, ProfileCreateRequest } from '@domain/profiles'


const useCreateProfile = (repository: ProfileRepository) => {
  return useMutation( (profile: ProfileCreateRequest) => repository.create(profile))
}
export default useCreateProfile
