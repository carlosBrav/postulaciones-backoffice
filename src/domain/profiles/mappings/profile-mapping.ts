import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'
import { Observable, throwError } from 'rxjs'
import { Profile } from '@domain/profiles'

export class ProfileMapping {
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

  toProfile = (json: Record<string, unknown>[]): Profile => {
    const { perfil } = json as any
    return Profile.fromJson(perfil)
  }

  toProfiles = (json: Record<string, unknown>[]): Profile[] => {
    const { listPerfil } = json as any
    return listPerfil.map((val: any) => Profile.fromJson(val))
  }
}
