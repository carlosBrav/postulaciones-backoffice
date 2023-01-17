import { BaseModel } from '../../common/model/base-model'
import { ParticipantEvaluationSecInd } from './participant-evaluation-sec-ind'

class ParticipantEvaluationSec extends BaseModel {
  idProyecto: number = 0
  idParticipante: number = 0
  idEvaluacion: number = 0
  idSeccion: number = 0
  score: number = 0
  factor: number = 0
  puntaje: number = 0
  correccion: number = 0
  dscSeccion: string = ''
  listProyectoParticipanteEvalSecInd: ParticipantEvaluationSecInd[] = []
}

export { ParticipantEvaluationSec }
