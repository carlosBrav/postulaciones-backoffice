import { HttpResponse } from '@core/http/http-client'

export interface ParameterProvider {
  getAll(typeParam: string): Promise<HttpResponse<Record<string, unknown>>>
}
