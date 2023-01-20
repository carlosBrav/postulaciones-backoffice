import { BaseModel } from '../../common/model/base-model'
import { ProyectoParticipanteItem } from './proyecto-participante-item'
class UpdateParticipanteProyecto extends BaseModel {
  idProyecto: number = 0
  listProyectoParticipante: ProyectoParticipanteItem[] = []
  idUsuMod: number = 0
}
export { UpdateParticipanteProyecto }
