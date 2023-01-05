import { BaseModel } from '@domain/common/model/base-model'

class ProjectParticipReqEval extends BaseModel {
  idEvaluacion: number = 0
  idEstado: string = ''
  idTipo: string = ''
  score: number = 0
}

export { ProjectParticipReqEval }
