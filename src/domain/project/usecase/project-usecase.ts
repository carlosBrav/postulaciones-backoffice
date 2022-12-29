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
  ProjectRepository,
  ProjectProvider,
  ProjectMapping,
  ProjectRequest,
  ProjectUpdate,
  ProjectResponse
} from '@domain/project'

export class ProjectUseCase implements ProjectRepository {
  constructor(
    public _projectProvider: ProjectProvider,
    private _projectMapping: ProjectMapping
  ) {}

  create(profile: ProjectRequest): Promise<ProjectResponse> {
    const source$ = from(this._projectProvider.create(profile)).pipe(
      map((response: any) => response.body),
      map(this._projectMapping.toProject),
      catchError((error: any) => this._projectMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<ProjectResponse>
  }

  delete(projects: string[], idUsuMod: string): Promise<boolean> {
    const source$ = of(projects).pipe(
      mergeMap((_contentIds: any) => {
        const deletes$ = _contentIds.map((project: string) =>
          from(this._projectProvider.delete(project, idUsuMod))
        )
        return forkJoin(deletes$)
      }),
      map((body: any) => console.log('delete ', body)),
      catchError((error: any) => this._projectMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<boolean>
  }

  update(profile: ProjectUpdate): Promise<boolean> {
    const source$ = from(this._projectProvider.update(profile)).pipe(
      map((body: any) => console.log('response update ', body.body)),
      catchError((error: any) => this._projectMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<boolean>
  }

  getAll = (): Promise<ProjectResponse[]> => {
    const source$ = from(this._projectProvider.getAll()).pipe(
      map((response: any) => response.body),
      map(this._projectMapping.toProjects),
      catchError((error: any) => this._projectMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<ProjectResponse[]>
  }
}
