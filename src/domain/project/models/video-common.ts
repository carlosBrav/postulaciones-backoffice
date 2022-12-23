import { BaseModel } from '@domain/common/model/base-model'

class VideoCommon extends BaseModel {
  codigo: string = ''
  nombre: string = ''
  descripcion: string = ''
}

export { VideoCommon }
