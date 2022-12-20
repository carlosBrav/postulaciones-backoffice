
import {ProfileService} from '@infra/services/profile/profile-provider'
import {ProfileUseCase,ProfileMapping} from '@domain/profiles'
import { httpClient } from '@main/factories/http-factory'


export const ProfileFactory: ProfileUseCase = new ProfileUseCase(
  new ProfileService(httpClient),
  new ProfileMapping()
)