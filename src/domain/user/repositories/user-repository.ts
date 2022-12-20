import { User, UserCreateRequest, UserEditRequest } from '@domain/user'
export interface UserRepository {
  getAll(): Promise<User[]>
  create(user: UserCreateRequest): Promise<string>
  delete(users: User[], idUsuMod: string): Promise<boolean>
  update(user: UserEditRequest): Promise<string>
}
