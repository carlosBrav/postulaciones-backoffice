import {Profile, ProfileCreateRequest, ProfileEditRequest} from '@domain/profiles'
export interface ProfileRepository {
  getAll(): Promise<Profile[]>
  create(profile: ProfileCreateRequest): Promise<Profile>
  delete(profiles: Profile[], idUsuMod: string): Promise<boolean>
  update(profile: ProfileEditRequest): Promise<boolean>
}
