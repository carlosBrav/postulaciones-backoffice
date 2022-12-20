import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse,
} from '@core/http/http-client'

import { ParameterProvider } from '@domain/parameter'

export class ParameterService implements ParameterProvider {
  private readonly msName = '/getParametro'
  constructor(private _httpClient: HttpClient) {}

  getAll(type_param: string): Promise<HttpResponse<Record<string, unknown>>> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msName}?tipParam=${type_param}`,
      method: HttpMethod.GET,
      body: {},
      headers: this._httpClient.getPrivateHeader(),
    }
    return this._httpClient.request(request) as any
  }
}
