import {
  ParticipantProvider,
  ParticipantCreateRequest,
  ParticipantUpdateRequest
} from '@domain/participant'
import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse
} from '@core/http/http-client'

export class ParticipantService implements ParticipantProvider {
  private readonly msName = 'getParticipante'
  private readonly msNameCreate = 'setParticipante'
  private readonly msNameDelete = 'delParticipante'

  constructor(private _httpClient: HttpClient) {}

  create(
    participant: ParticipantCreateRequest
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameCreate}`,
      method: HttpMethod.POST,
      body: participant.toJson(),
      headers: this._httpClient.getPrivateHeader()
    }
    return this._httpClient.request(request) as any
  }
  delete(
    idParticipante: number,
    idUsuMod: string
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameDelete}`,
      method: HttpMethod.POST,
      body: { idParticipante, idUsuMod },
      headers: this._httpClient.getPrivateHeader()
    }
    return this._httpClient.request(request) as any
  }
  update(
    participant: ParticipantUpdateRequest
  ): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msNameCreate}`,
      method: HttpMethod.POST,
      body: participant.toJson(),
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
