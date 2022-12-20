import { useMutation, useQuery } from '@tanstack/react-query'

import { UserRepository } from '@domain/user'

const useUsers = (repository: UserRepository) => {
  return useMutation(() => repository.getAll())
}
export default useUsers
