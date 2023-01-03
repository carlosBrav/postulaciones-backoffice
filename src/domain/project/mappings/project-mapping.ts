import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'
import { ParticipantEvaluation, ProjectResponse } from '../models'
import { Observable, throwError } from 'rxjs'
import {
  AccessDeniedError,
  InvalidCredentialsError,
  UnexpectedError
} from '@domain/authentication/errors'

export class ProjectMapping {
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

  toProjects = (json: Record<string, unknown>[]): ProjectResponse[] => {
    const { listProyecto } = json as any
    return listProyecto.map((val: any) => ProjectResponse.fromJson(val))
  }

  toProjectById = (json: Record<string, unknown>[]): ProjectResponse => {
    const { listProyecto } = json as any
    return ProjectResponse.fromJson({ ...listProyecto[0] }) as ProjectResponse
  }

  toParticipants = (json: Record<string, unknown>[]): ProjectResponse[] => {
    const { listProyectoParticipante } = json as any
    return listProyectoParticipante.map((val: any) =>
      ProjectResponse.fromJson(val)
    )
  }

  toEvaluations = (
    json: Record<string, unknown>[]
  ): ParticipantEvaluation[] => {
    const { listProyectoParticipanteEval } = json as any
    return listProyectoParticipanteEval.map((val: any) =>
      ParticipantEvaluation.fromJson(val)
    )
  }

  toProject = (json: Record<string, unknown>[]): ProjectResponse => {
    const { proyecto } = json as any
    return ProjectResponse.fromJson({ ...proyecto })
  }
}
