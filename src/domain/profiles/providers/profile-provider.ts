import { HttpResponse } from '@core/http/http-client'
import { ProfileCreateRequest, ProfileEditRequest } from '../models';

export interface ProfileProvider {
  getAll(): Promise<HttpResponse<Record<string, unknown>>>
  create(profile: ProfileCreateRequest): Promise<HttpResponse<Record<string, unknown>>>
  delete(idPerfil: string, idUsuMod: string): Promise<HttpResponse<Record<string, unknown>>>
  update(profile: ProfileEditRequest): Promise<HttpResponse<Record<string, unknown>>>
}
