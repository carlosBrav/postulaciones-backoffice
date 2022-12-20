import {BaseModel} from '@domain/common/model/base-model'

class ProfileCreateRequest extends BaseModel {

  nombre: string = ''
  observacion: string = ''
  idUsuCrea: number = 0
}

export {ProfileCreateRequest}