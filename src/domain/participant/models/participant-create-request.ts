import { BaseModel } from '@domain/common/model/base-model'
import { SaludProteccion } from './salud-proteccion'
import { MediosVida } from './medios-vida'

class ParticipantCreateRequest extends BaseModel {
  idTipDoc: string = ''
  nombre: string = ''
  apellido: string = ''
  numDoc: string = ''
  email: string = ''
  fono: string = ''
  distrito: string = ''
  provincia: string = ''
  region: string = ''
  edad: number = 0
  flagEmprendimiento: boolean = false
  flagAccesoTecno: boolean = false
  fecNacimiento: string = ''
  fecVencimiento: string = ''
  aniosEmprendimiento: number = 0
  flagVentaInternet: boolean = false
  idUsuCrea: number = 0
  fotoBase64: string = ''
  saludProteccion: SaludProteccion = new SaludProteccion()
  mediosVida: MediosVida = new MediosVida()
}

export { ParticipantCreateRequest }
