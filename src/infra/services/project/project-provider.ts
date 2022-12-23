import { ProjectProvider } from '@domain/project/providers/project-provider'
import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse
} from '@core/http/http-client'
import { ProjectRequest, ProjectUpdate } from '@domain/project/models'

export class ProjectService implements ProjectProvider {
  private readonly msName = '/getProyecto'
  private readonly msNameCreate = '/setProyecto'
  private readonly msNameDelete = '/delProyecto'

  constructor(private _httpClient: HttpClient) {}

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
