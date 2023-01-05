import { HttpResponse } from '@core/http/http-client'
import {
  ProjectParticipantCreateReq,
  ProjectRequest,
  ProjectUpdate,
  ProjectParticipantDeleteRequest,
  UpdateParticipanteProyecto
} from '../models'

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
  getById(projectId: string): Promise<HttpResponse<Record<string, unknown>>>
  getParticipants(
    projectId: string
  ): Promise<HttpResponse<Record<string, unknown>>>
  addParticipants(
    participants: ProjectParticipantCreateReq
  ): Promise<HttpResponse<Record<string, unknown>>>
  deleteParticipants(
    participants: ProjectParticipantDeleteRequest
  ): Promise<HttpResponse<Record<string, unknown>>>
  getResultsByParticipant(
    idParticipant: string,
    idProject: string
  ): Promise<HttpResponse<Record<string, unknown>>>
  updateResultParticipant(
    request: UpdateParticipanteProyecto
  ): Promise<HttpResponse<Record<string, unknown>>>
}
