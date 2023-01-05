import {
  ProjectRequest,
  ProjectResponse,
  ProjectUpdate,
  Participante,
  ProjectParticipantCreateReq,
  ProjectParticipantDeleteRequest,
  ParticipantEvaluation,
  UpdateParticipanteProyecto
} from '../models'
export interface ProjectRepository {
  getAll(): Promise<ProjectResponse[]>
  create(project: ProjectRequest): Promise<ProjectResponse>
  delete(projects: string[], idUsuMod: string): Promise<boolean>
  update(project: ProjectUpdate): Promise<boolean>
  getById(projectId: string): Promise<ProjectResponse>
  getParticipants(projectId: string): Promise<Participante[]>
  addParticipants(participants: ProjectParticipantCreateReq): Promise<boolean>
  deleteParticipants(
    participants: ProjectParticipantDeleteRequest
  ): Promise<boolean>
  getResultsByParticipant(
    idParticipant: string,
    idProject: string
  ): Promise<ParticipantEvaluation[]>
  updateResultParticipant(request: UpdateParticipanteProyecto): Promise<boolean>
}
