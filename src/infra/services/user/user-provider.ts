import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse,
} from '@core/http/http-client'

import { User, UserProvider, UserCreateRequest, UserEditRequest } from '@domain/user'

export class UserService implements UserProvider {
  private readonly msName = '/getUsuario'
  private readonly msNameCreate = '/setUsuario'
  private readonly msNameDelete = '/delUsuario'

  constructor(private _httpClient: HttpClient) {}

  update(user: UserEditRequest): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameCreate}`,
      method: HttpMethod.POST,
      body: user.toJson(),
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }

  delete(idUsuario: string, idUsuMod: string): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameDelete}`,
      method: HttpMethod.POST,
      body: {idUsuario,idUsuMod},
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }

  create(user: UserCreateRequest): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameCreate}`,
      method: HttpMethod.POST,
      body: user.toJson(),
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }

  getAll(): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msName}`,
      method: HttpMethod.GET,
      body: {},
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }
}
