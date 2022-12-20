import { catchError, map, firstValueFrom, from, of, mergeMap,forkJoin } from 'rxjs'

import {ProfileRepository,ProfileProvider,ProfileMapping, Profile} from '@domain/profiles'
import { ProfileCreateRequest, ProfileEditRequest } from '../models'

export class ProfileUseCase implements ProfileRepository {
  constructor(public _profileProvider: ProfileProvider,
    private _profileMapping: ProfileMapping,) {}

  create(profile: ProfileCreateRequest): Promise<Profile> {
    const source$ = from(this._profileProvider.create(profile)).pipe(
      map((response: any)=> response.body),
      map(this._profileMapping.toProfile),
      catchError((error: any) => this._profileMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<Profile>
  }
  
  delete(profiles: Profile[], idUsuMod: string): Promise<boolean> {
    const source$ = of(profiles).pipe(
      mergeMap((_contentIds: any) => {
        const deletes$ = _contentIds.map((profile: Profile) =>
          from(this._profileProvider.delete(`${profile.idPerfil}`,idUsuMod))
        )
        return forkJoin(deletes$)
      }),
      map((body: any) => console.log('delete ', body)),
      catchError((error: any) => this._profileMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<boolean>
  }

  update(profile: ProfileEditRequest): Promise<boolean> {
    const source$ = from(this._profileProvider.update(profile)).pipe(
      map((body: any) => console.log('response update ', body.body)),
      catchError((error: any) => this._profileMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<boolean>
  }

  getAll = (): Promise<Profile[]> => {
    const source$ = from(this._profileProvider.getAll()).pipe(
      map((response: any) => response.body),
      map(this._profileMapping.toProfiles),
      catchError((error: any) => this._profileMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<Profile[]>
  }

}
