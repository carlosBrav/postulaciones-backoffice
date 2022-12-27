import {
  catchError,
  map,
  firstValueFrom,
  from,
  of,
  mergeMap,
  forkJoin
} from 'rxjs'

import {
  ParticipantRepository,
  ParticipantProvider,
  ParticipantMapping,
  ParticipantCreateRequest,
  ParticipantUpdateRequest,
  ParticipantResponse
} from '../../participant'

export class ParticipnatUseCase implements ParticipantRepository {
  constructor(
    public _participantProvider: ParticipantProvider,
    private _participantMapping: ParticipantMapping
  ) {}

  create(participant: ParticipantCreateRequest): Promise<ParticipantResponse> {
    const source$ = from(this._participantProvider.create(participant)).pipe(
      map((response: any) => response.body),
      map(this._participantMapping.toParticipant),
      catchError((error: any) => this._participantMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<ParticipantResponse>
  }

  delete(participants: number[], idUsuMod: string): Promise<boolean> {
    const source$ = of(participants).pipe(
      mergeMap((_participantsId: any) => {
        const deletes$ = _participantsId.map((participant: number) =>
          from(this._participantProvider.delete(participant, idUsuMod))
        )
        return forkJoin(deletes$)
      }),
      map((body: any) => console.log('delete ', body)),
      catchError((error: any) => this._participantMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<boolean>
  }

  update(participant: ParticipantUpdateRequest): Promise<boolean> {
    const source$ = from(this._participantProvider.update(participant)).pipe(
      map((body: any) => console.log('response update ', body.body)),
      catchError((error: any) => this._participantMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<boolean>
  }

  getAll = (): Promise<ParticipantResponse[]> => {
    const source$ = from(this._participantProvider.getAll()).pipe(
      map((response: any) => response.body),
      map(this._participantMapping.toParticipants),
      catchError((error: any) => this._participantMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<ParticipantResponse[]>
  }
}
