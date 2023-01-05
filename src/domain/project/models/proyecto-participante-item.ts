import { BaseModel } from '../../common/model/base-model'
import { ProyectoParticiapnteItemEval } from './proyecto-participante-item-val'
class ProyectoParticipanteItem extends BaseModel {
  idParticipante: number = 0
  idEstado: string = ''
  idResultado: string = ''
  listProyectoParticipanteEval: ProyectoParticiapnteItemEval[] = []
}

export { ProyectoParticipanteItem }
