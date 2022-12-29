import { BaseModel } from '@domain/common/model/base-model'
import { ProjectParticipantDelete } from './project-participant-delete'

class ProjectParticipantDeleteRequest extends BaseModel {
  idProyecto: number = 0
  listProyectoParticipante: ProjectParticipantDelete[] = []
}

export { ProjectParticipantDeleteRequest }
