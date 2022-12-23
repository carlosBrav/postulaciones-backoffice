import { BaseModel } from '@domain/common/model/base-model'

class ProjectRequest extends BaseModel {
  idEstado: string = ''
  codigo: string = ''
  nombre: string = ''
  descripcion: string = ''
  jefe: string = ''
  terminos: string = ''
  flagLanding: boolean = false
  idUsuCrea: number = 0
}

export { ProjectRequest }
