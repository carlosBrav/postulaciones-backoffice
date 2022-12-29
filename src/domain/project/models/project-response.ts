import { BaseModel } from '@domain/common/model/base-model'
import { Foto, Video, Evaluacion, Participante } from '@domain/project/models'

class ProjectResponse extends BaseModel {
  idProyecto: number = 0
  idEstado: string = ''
  codigo: string = ''
  nombre: string = ''
  descripcion: string = ''
  jefe: string = ''
  terminos: string = ''
  flagLanding: boolean = false
  dscEstado: string = ''
  listFoto: Foto[] = []
  listVideo: Video[] = []
  listEvaluacion: Evaluacion[] = []
  listParticipante: Participante[] = []
}

export { ProjectResponse }
