import {
  ParticipantCreateRequest,
  ParticipantResponse,
  ParticipantUpdateRequest
} from '../models'
export interface ParticipantRepository {
  getAll(): Promise<ParticipantResponse[]>
  create(project: ParticipantCreateRequest): Promise<ParticipantResponse>
  delete(projects: string[], idUsuMod: string): Promise<boolean>
  update(project: ParticipantUpdateRequest): Promise<boolean>
}
