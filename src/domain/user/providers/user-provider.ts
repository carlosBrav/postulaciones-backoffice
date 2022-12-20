import { HttpResponse } from '@core/http/http-client'
import { User, UserCreateRequest, UserEditRequest } from '../models';

export interface UserProvider {
  getAll(): Promise<HttpResponse<Record<string, unknown>>>
  create(user: UserCreateRequest): Promise<HttpResponse<Record<string, unknown>>>
  delete(idUsuario: string, idUsuMod: string): Promise<HttpResponse<Record<string, unknown>>>
  update(user: UserEditRequest): Promise<HttpResponse<Record<string, unknown>>>
}
