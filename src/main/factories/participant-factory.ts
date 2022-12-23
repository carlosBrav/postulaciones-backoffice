import { ParticipantService } from '@infra/services/participant/participant-provider'
import { ParticipnatUseCase, ParticipantMapping } from '@domain/participant'
import { httpClient } from '@main/factories/http-factory'

export const ParticipantFactory: ParticipnatUseCase = new ParticipnatUseCase(
  new ParticipantService(httpClient),
  new ParticipantMapping()
)
