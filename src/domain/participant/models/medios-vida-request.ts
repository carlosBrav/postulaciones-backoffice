import { BaseModel } from '../../common/model/base-model'

class MediosVidaRequest extends BaseModel {
  idTipoCalculo: string = ''
  idSexo: string = ''
  idOrientacion: string = ''
  idDependientes: string = ''
  idOtrosDependientes: string = ''
  idEmbarazo: string = ''
  idCondFisica: string = ''
  idCondAlojamiento: string = ''
  idHacimiento: string = ''
  idSobreviviente: string = ''
  idRedSoporte: string = ''
  idCondMigratoria: string = ''
  idDocPosee: string = ''
  idNivelEducativo: string = ''
  idCondLaboral: string = ''
  idIngresoProm: string = ''
  idEdad: string = ''
  idNacionalidad: string = ''
  idTipoResidencia: string = ''
  idFamDirectos: string = ''
  idIdentGenero: string = ''
  idHorasTrabajo: string = ''
}

export { MediosVidaRequest }
