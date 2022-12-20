import { useMutation } from '@tanstack/react-query'

import { UserRepository, User } from '@domain/user'


const useDeleteUser = (repository: UserRepository, idUsuCrea: string) => {
  return useMutation( (users: User[]) => repository.delete(users, idUsuCrea))
}
export default useDeleteUser
