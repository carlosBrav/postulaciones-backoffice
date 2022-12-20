import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'

import {
  AccessDeniedError,
  InvalidCredentialsError,
  UnexpectedError
} from '@domain/authentication/errors'
import { User } from '@domain/user'

export class UserMapping {
  toError = (error: HttpError): any => {
    switch (error.statusCode) {
      case HttpStatusCode.unauthorized:
        return new InvalidCredentialsError()
      case HttpStatusCode.forbidden:
        return new AccessDeniedError()
      default:
        return new UnexpectedError()
    }
  }

  toUsers = (json: Record<string, unknown>[]): User[] => {
    const {listUsuario} = json as any
    return listUsuario.map((val: any)=> User.fromJson(val))
  }
}
