import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'
import { Observable, throwError } from 'rxjs'
import {
  AccessDeniedError,
  InvalidCredentialsError,
  UnexpectedError
} from '@domain/authentication/errors'
import { User } from '@domain/user'

export class UserMapping {
  toError = (error: HttpError): Observable<any> => {
    if (error instanceof HttpError) {
      switch (error.statusCode) {
        case HttpStatusCode.unauthorized:
          return throwError('Credenciales inválidas')
        case HttpStatusCode.forbidden:
          return throwError('Acceso denegado')
        default:
          return throwError('Ocurrió un error desconocido')
      }
    } else {
      return throwError('Ocurrió un error desconocido')
    }
  }

  toUsers = (json: Record<string, unknown>[]): User[] => {
    const { listUsuario } = json as any
    return listUsuario.map((val: any) => User.fromJson(val))
  }
}
