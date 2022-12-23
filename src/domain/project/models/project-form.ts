import { BaseModel } from '@domain/common/model/base-model'

class ProjectForm extends BaseModel {
  idEstado: string = ''
  codigo: string = ''
  nombre: string = ''
  descripcion: string = ''
  jefe: string = ''
  terminos: string = ''
  flagLanding: boolean = false
}

export { ProjectForm }
