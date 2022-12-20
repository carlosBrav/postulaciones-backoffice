import { useMutation } from '@tanstack/react-query'

import { UserRepository, UserCreateRequest } from '@domain/user'


const useCreateUser = (repository: UserRepository) => {
  return useMutation( (user: UserCreateRequest) => repository.create(user))
}
export default useCreateUser
