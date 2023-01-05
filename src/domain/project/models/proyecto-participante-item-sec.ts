import { BaseModel } from '../../common/model/base-model'
import { ProyectoParticipanteEvalInd } from './proyecto-participante-eval-ind'
class ProyectoParticiapnteItemEvalSec extends BaseModel {
  idSeccion: number = 0
  factor: number = 0
  listProyectoParticipanteEvalSecInd: ProyectoParticipanteEvalInd[] = []
}

export { ProyectoParticiapnteItemEvalSec }
