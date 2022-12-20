import {BaseModel} from '@domain/common/model/base-model'

class Profile extends BaseModel {

  idPerfil: number = 0
  nombre: string = ''
}

export {Profile}