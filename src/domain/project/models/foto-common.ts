import { BaseModel } from '@domain/common/model/base-model'

class FotoCommon extends BaseModel {
  codigo: string = ''
  nombre: string = ''
  descripcion: string = ''
}

export { FotoCommon }
