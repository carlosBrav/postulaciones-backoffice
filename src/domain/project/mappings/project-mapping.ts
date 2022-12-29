import { HttpError } from '@core/http/errors/http-error'
import { HttpStatusCode } from '@core/http/http-client'
import { ProjectResponse } from '../models'
import {
  AccessDeniedError,
  InvalidCredentialsError,
  UnexpectedError
} from '@domain/authentication/errors'

export class ProjectMapping {
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

  toProjects = (json: Record<string, unknown>[]): ProjectResponse[] => {
    const { listProyecto } = json as any
    return listProyecto.map((val: any) => ProjectResponse.fromJson(val))
  }

  toProject = (json: Record<string, unknown>[]): ProjectResponse => {
    const { proyecto } = json as any
    return ProjectResponse.fromJson({ ...proyecto })
  }
}
