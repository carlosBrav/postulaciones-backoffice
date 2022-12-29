import { BaseModel } from '../../common/model/base-model'

class SaludProteccionRequest extends BaseModel {
  idTipoCalculo: string = ''
  idSexo: string = ''
  idOrientacion: string = ''
  idDependientes: string = ''
  idDocPosee: string = ''
  idOtrosDependientes: string = ''
  idEmbarazo: string = ''
  idCondFisica: string = ''
  idCondAlojamiento: string = ''
  idHacimiento: string = ''
  idSobreviviente: string = ''
  idRedSoporte: string = ''
  idCondMigratoria: string = ''
  idNivelEducativo: string = ''
  idCondLaboral: string = ''
  idSeguroSalud: string = ''
  idIngresoProm: string = ''
  idEdad: string = ''
  idNacionalidad: string = ''
  idIdentGenero: string = ''
}

export { SaludProteccionRequest }
