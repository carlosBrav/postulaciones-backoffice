import { BaseModel } from '@domain/common/model/base-model'

class ProjectParticipantRequest extends BaseModel {
  idParticipante: number = 0
  idEstado: string = ''
  idResultado: string = ''
  idUsuCrea: number = 0
}

export { ProjectParticipantRequest }
