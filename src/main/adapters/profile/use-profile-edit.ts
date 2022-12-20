import { useMutation } from '@tanstack/react-query'

import { ProfileRepository, ProfileEditRequest } from '@domain/profiles'


const useUpdateUser = (repository: ProfileRepository) => {
  return useMutation( (profile: ProfileEditRequest) => repository.update(profile))
}
export default useUpdateUser
