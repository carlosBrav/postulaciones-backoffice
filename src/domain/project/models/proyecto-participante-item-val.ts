import { BaseModel } from '../../common/model/base-model'
import { ProyectoParticiapnteItemEvalSec } from './proyecto-participante-item-sec'
class ProyectoParticipanteItemEval extends BaseModel {
  idEvaluacion: number = 0
  idEstado: string = ''
  idTipo: string = ''
  score: number | null = 1
  listProyectoParticipanteEvalSec: ProyectoParticiapnteItemEvalSec[] = []
}
export { ProyectoParticipanteItemEval }
