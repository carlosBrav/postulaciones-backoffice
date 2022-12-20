import { BaseModel } from '@domain/common/model/base-model'

class UserRequest extends BaseModel {
  idTipDoc: string = ''
  idPerfil: string = ''
  idUsuCrea: string = ''
  numDoc: string = ''
  codigo: string = ''
  nombre: string = ''
  apePat: string = ''
  apeMat: string = ''
  email: string = ''
  celular: string = ''
  login: string = ''
  clave: string = ''
  file: null | File | string = null
  file_string: string = ''
}

export { UserRequest }
