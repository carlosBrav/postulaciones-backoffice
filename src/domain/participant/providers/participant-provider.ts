import { HttpResponse } from '@core/http/http-client'
import { ParticipantCreateRequest, ParticipantUpdateRequest } from '../models'

export interface ParticipantProvider {
  getAll(): Promise<HttpResponse<Record<string, unknown>>>
  create(
    participant: ParticipantCreateRequest
  ): Promise<HttpResponse<Record<string, unknown>>>
  delete(
    idParticipant: string,
    idUsuMod: string
  ): Promise<HttpResponse<Record<string, unknown>>>
  update(
    project: ParticipantUpdateRequest
  ): Promise<HttpResponse<Record<string, unknown>>>
}
