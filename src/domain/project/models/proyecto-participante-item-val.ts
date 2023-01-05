import { BaseModel } from '../../common/model/base-model'
import { ProyectoParticiapnteItemEvalSec } from './proyecto-participante-item-sec'
class ProyectoParticiapnteItemEval extends BaseModel {
  idEvaluacion: number = 0
  idEstado: string = ''
  idTipo: string = ''
  score: number = 0
  listProyectoParticipanteEvalSec: ProyectoParticiapnteItemEvalSec[] = []
}
export { ProyectoParticiapnteItemEval }
