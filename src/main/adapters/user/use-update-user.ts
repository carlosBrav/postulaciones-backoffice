import { useMutation } from '@tanstack/react-query'

import { UserRepository, UserEditRequest } from '@domain/user'


const useUpdateUser = (repository: UserRepository) => {
  return useMutation( (user: UserEditRequest) => repository.update(user))
}
export default useUpdateUser
