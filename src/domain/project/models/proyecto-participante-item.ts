import { BaseModel } from '../../common/model/base-model'
import { ProyectoParticipanteItemEval } from './proyecto-participante-item-val'
class ProyectoParticipanteItem extends BaseModel {
  idParticipante: number = 0
  idEstado: string = ''
  idResultado: string = ''
  listProyectoParticipanteEval: ProyectoParticipanteItemEval[] = []
}

export { ProyectoParticipanteItem }
