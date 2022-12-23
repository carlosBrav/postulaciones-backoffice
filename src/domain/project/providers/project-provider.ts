import { HttpResponse } from '@core/http/http-client'
import { ProjectRequest, ProjectUpdate } from '../models'

export interface ProjectProvider {
  getAll(): Promise<HttpResponse<Record<string, unknown>>>
  create(
    project: ProjectRequest
  ): Promise<HttpResponse<Record<string, unknown>>>
  delete(
    idProyecto: string,
    idUsuMod: string
  ): Promise<HttpResponse<Record<string, unknown>>>
  update(profile: ProjectUpdate): Promise<HttpResponse<Record<string, unknown>>>
}
