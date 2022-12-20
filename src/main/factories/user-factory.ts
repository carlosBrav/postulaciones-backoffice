
import {UserService} from '@infra/services/user/user-provider'
import {UserUseCase,UserMapping} from '@domain/user'
import { httpClient } from '@main/factories/http-factory'


export const UserFactory: UserUseCase = new UserUseCase(
  new UserService(httpClient),
  new UserMapping()
)