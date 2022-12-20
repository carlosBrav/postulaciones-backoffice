import { catchError, map, firstValueFrom, from, of, mergeMap,forkJoin } from 'rxjs'

import {UserRepository,UserProvider,UserMapping, User, UserCreateRequest} from '@domain/user'
import { UserEditRequest } from '../models'

export class UserUseCase implements UserRepository {
  constructor(public _userProvider: UserProvider,
    private _userMapping: UserMapping,) {}

  update(user: UserEditRequest): Promise<string> {
    const source$ = from(this._userProvider.update(user)).pipe(
      map((body: any) => console.log('response update ', body.body)),
      catchError((error: any) => this._userMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<string>
  }
    
  delete(users: User[], idUsuMod: string): Promise<boolean> {
    const source$ = of(users).pipe(
      mergeMap((_contentIds: any) => {
        const deletes$ = _contentIds.map((user: User) =>
          from(this._userProvider.delete(`${user.idUsuario}`,idUsuMod))
        )
        return forkJoin(deletes$)
      }),
      map((body: any) => console.log('delete ', body)),
      catchError((error: any) => this._userMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<boolean>
  }

  create(user: UserCreateRequest): Promise<string> {
    const source$ = from(this._userProvider.create(user)).pipe(
      map((body: any) => console.log('response create ', body.body)),
      catchError((error: any) => this._userMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<string>
  }


  getAll = (): Promise<User[]> => {
    const source$ = from(this._userProvider.getAll()).pipe(
      map((response: any)=> response.body),
      map(this._userMapping.toUsers),
      catchError((error: any) => this._userMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<User[]>
  }

}
