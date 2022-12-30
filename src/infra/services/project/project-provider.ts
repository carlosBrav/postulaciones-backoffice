import { ProjectProvider } from '@domain/project/providers/project-provider'
import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse
} from '@core/http/http-client'
import {
  ProjectParticipantCreateReq,
  ProjectParticipantDeleteRequest,
  ProjectRequest,
  ProjectUpdate
} from '@domain/project/models'

export class ProjectService implements ProjectProvider {
  private readonly msName = '/getProyecto'
  private readonly msNameCreate = '/setProyecto'
  private readonly msNameDelete = '/delProyecto'
  private readonly msNameGetById = '/getProyecto?idProyecto='
  private readonly msNamePartic = '/getProyectoParticipante?idProyecto='
  private readonly msNameCreateParticip = 'setProyectoParticipante'
  private readonly msNameDeleteParticip = 'delProyectoParticipante'

  constructor(private _httpClient: HttpClient) {}

  deleteParticipants(
    participants: ProjectParticipantDeleteRequest
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameDeleteParticip}`,
      method: HttpMethod.POST,
      body: participants.toJson(),
      headers: this._httpClient.getPrivateHeader()
    }
    return this._httpClient.request(request) as any
  }

  addParticipants(
    participants: ProjectParticipantCreateReq
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameCreateParticip}`,
      method: HttpMethod.POST,
      body: participants.toJson(),
      headers: this._httpClient.getPrivateHeader()
    }
    return this._httpClient.request(request) as any
  }

  getParticipants(
    projectId: string
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNamePartic}${projectId}`,
      method: HttpMethod.GET,
      body: {},
      headers: this._httpClient.getPrivateHeader()
    }
    return this._httpClient.request(request) as any
  }

  getById(projectId: string): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameGetById}${projectId}`,
      method: HttpMethod.GET,
      body: {},
      headers: this._httpClient.getPrivateHeader()
    }
    return this._httpClient.request(request) as any
  }

  create(
    project: ProjectRequest
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameCreate}`,
      method: HttpMethod.POST,
      body: project.toJson(),
      headers: this._httpClient.getPrivateHeader()
    }
    return this._httpClient.request(request) as any
  }
  delete(
    idProject: string,
    idUsuMod: string
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameDelete}`,
      method: HttpMethod.POST,
      body: { idProject, idUsuMod },
      headers: this._httpClient.getPrivateHeader()
    }
    return this._httpClient.request(request) as any
  }
  update(
    project: ProjectUpdate
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameCreate}`,
      method: HttpMethod.POST,
      body: project.toJson(),
      headers: this._httpClient.getPrivateHeader()
    }
    return this._httpClient.request(request) as any
  }

  getAll(): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msName}`,
      method: HttpMethod.GET,
      body: {},
      headers: this._httpClient.getPrivateHeader()
    }
    return this._httpClient.request(request) as any
  }
}
