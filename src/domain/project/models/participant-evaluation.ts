import { BaseModel } from '../../common/model/base-model'
import { ParticipantEvaluationSec } from './participant-evaluation-sec'

class ParticipantEvaluation extends BaseModel {
  idProyecto: number = 0
  idParticipante: number = 0
  idEvaluacion: number = 0
  idEstado: string = ''
  score: number = 0.0
  dscEvaluacion: string = ''
  dscEstado: string = ''
  videoURL: string = ''
  idTipo: string = ''
  listProyectoParticipanteEvalSec: ParticipantEvaluationSec[] = []
}

export { ParticipantEvaluation }
