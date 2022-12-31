import { BaseModel } from '../../common/model/base-model'

class ParticipantEvaluationSecInd extends BaseModel {
  idProyecto: number = 0
  idParticipante: number = 0
  idEvaluacion: number = 0
  idSeccion: number = 0
  idIndicador: number = 0
  respuesta: number = 0
  dscIndicador: string = ''
}

export { ParticipantEvaluationSecInd }
