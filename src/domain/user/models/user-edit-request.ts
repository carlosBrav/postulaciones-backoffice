import { UserCreateRequest } from '@domain/user/models/user-create-request'

class UserEditRequest extends UserCreateRequest {
  idUsuario: number = 0
}

export { UserEditRequest }
