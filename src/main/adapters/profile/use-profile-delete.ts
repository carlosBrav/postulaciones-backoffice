import { useMutation } from '@tanstack/react-query'

import { ProfileRepository, Profile } from '@domain/profiles'


const useDeleteUser = (repository: ProfileRepository, idUsuCrea: string) => {
  return useMutation( (profiles: Profile[]) => repository.delete(profiles, idUsuCrea))
}
export default useDeleteUser
