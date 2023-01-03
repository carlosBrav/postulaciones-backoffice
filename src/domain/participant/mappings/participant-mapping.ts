import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'
import { ParticipantResponse } from '../models'
import { Observable, throwError } from 'rxjs'

export class ParticipantMapping {
  toError = (error: Error): Observable<any> => {
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

  toParticipants = (json: Record<string, unknown>[]): ParticipantResponse[] => {
    const { listParticipante } = json as any
    return listParticipante.map((val: any) => ParticipantResponse.fromJson(val))
  }

  toParticipant = (json: Record<string, unknown>[]): ParticipantResponse => {
    const { participante } = json as any
    return ParticipantResponse.fromJson({ participante })
  }
}
