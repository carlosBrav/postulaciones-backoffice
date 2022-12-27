import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'
import { ParticipantResponse } from '../models'
import {
  AccessDeniedError,
  InvalidCredentialsError,
  UnexpectedError
} from '@domain/authentication/errors'

export class ParticipantMapping {
  toError = (error: Error): any => {
    if (error instanceof HttpError) {
      switch (error.statusCode) {
        case HttpStatusCode.unauthorized:
          return new InvalidCredentialsError()
        case HttpStatusCode.forbidden:
          return new AccessDeniedError()
        default:
          return new UnexpectedError()
      }
    } else {
      throw new UnexpectedError()
    }
  }

  toParticipants = (json: Record<string, unknown>[]): ParticipantResponse[] => {
    const { listParticipante } = json as any
    return listParticipante.map((val: any) => ParticipantResponse.fromJson(val))
  }

  toParticipant = (json: Record<string, unknown>[]): ParticipantResponse => {
    const { participante } = json as any
    return ParticipantResponse.fromJson({ participante })
  }
}
