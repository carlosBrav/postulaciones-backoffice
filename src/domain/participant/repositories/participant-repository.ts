import {
  ParticipantCreateRequest,
  ParticipantResponse,
  ParticipantUpdateRequest
} from '../models'
export interface ParticipantRepository {
  getAll(): Promise<ParticipantResponse[]>
  create(project: ParticipantCreateRequest): Promise<ParticipantResponse>
  delete(projects: number[], idUsuMod: string): Promise<boolean>
  update(project: ParticipantUpdateRequest): Promise<boolean>
}
