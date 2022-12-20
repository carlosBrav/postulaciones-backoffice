import { BaseModel } from '@domain/common/model/base-model'

class UserCreateRequest extends BaseModel {
  idPerfil: number = 0
  idUsuCrea: number = 0
  idTipDoc: string = ''
  numDoc: string = ''
  codigo: string = ''
  nombre: string = ''
  apePat: string = ''
  apeMat: string = ''
  email: string = ''
  celular: string = ''
  login: string = ''
  clave: string = ''
  fotoBase64: string = ''
}

export { UserCreateRequest }
