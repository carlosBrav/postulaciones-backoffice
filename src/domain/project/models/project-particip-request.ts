import { BaseModel } from '@domain/common/model/base-model'
import { ProjectParticipReqEval } from './project-particip-request-eval'
class ProjectParticipantRequest extends BaseModel {
  idParticipante: number = 0
  idEstado: string = ''
  idResultado: string = ''
  idUsuCrea: number = 0
  listProyectoParticipanteEval: ProjectParticipReqEval[] = []
}

export { ProjectParticipantRequest }
