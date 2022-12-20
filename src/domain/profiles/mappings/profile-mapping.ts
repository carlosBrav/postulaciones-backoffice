import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'

import {
  AccessDeniedError,
  InvalidCredentialsError,
  UnexpectedError
} from '@domain/authentication/errors'
import { Profile } from '@domain/profiles'

export class ProfileMapping {
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

  toProfile = (json: Record<string, unknown>[]): Profile => {
    const {body} = json as any
    return Profile.fromJson(body.perfil)
  }

  toProfiles = (json: Record<string, unknown>[]): Profile[] => {
    const {listPerfil} = json as any
    return listPerfil.map((val: any)=> Profile.fromJson(val))
  }
}
