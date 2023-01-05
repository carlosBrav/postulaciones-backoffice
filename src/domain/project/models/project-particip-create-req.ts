import { BaseModel } from '@domain/common/model/base-model'
import { ProjectParticipantRequest } from './project-particip-request'

class ProjectParticipantCreateReq extends BaseModel {
  idProyecto: number = 0
  listProyectoParticipante: ProjectParticipantRequest[] = []
  idusuMod: number = 0
}

export { ProjectParticipantCreateReq }
