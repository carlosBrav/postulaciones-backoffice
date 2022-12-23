import { BaseModel } from '@domain/common/model/base-model'
import { SaludProteccion } from './salud-proteccion'
import { MediosVida } from './medios-vida'
import { ParticipantCreateRequest } from './participant-create-request'

class ParticipantUpdateRequest extends ParticipantCreateRequest {
  idParticipante: number = 0
}

export { ParticipantUpdateRequest }
