import { BaseModel } from '@domain/common/model/base-model'
import { FotoUpdate, VideoCommon } from '@domain/project/models'

class ProjectUpdate extends BaseModel {
  idProyecto: number = 0
  idEstado: string = ''
  codigo: string = ''
  nombre: string = ''
  descripcion: string = ''
  jefe: string = ''
  terminos: string = ''
  flagLanding: boolean = false
  landing: string = ''
  idUsuMod: number = 0
  listFoto: FotoUpdate[] = []
  listVideo: VideoCommon[] = []
}

export { ProjectUpdate }
