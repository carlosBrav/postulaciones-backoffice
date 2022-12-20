import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse,
} from '@core/http/http-client'

import { ProfileCreateRequest, ProfileEditRequest, ProfileProvider } from '@domain/profiles'

export class ProfileService implements ProfileProvider {
  private readonly msName = '/getPerfil'
  private readonly msNameCreate = '/setPerfil'
  private readonly msNameDelete = '/delPerfil'

  constructor(private _httpClient: HttpClient) {}

  create(profile: ProfileCreateRequest): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameCreate}`,
      method: HttpMethod.POST,
      body: profile.toJson(),
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }
  delete(idPerfil: string, idUsuMod: string): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameDelete}`,
      method: HttpMethod.POST,
      body: {idPerfil,idUsuMod},
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }
  update(profile: ProfileEditRequest): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameCreate}`,
      method: HttpMethod.POST,
      body: profile.toJson(),
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
