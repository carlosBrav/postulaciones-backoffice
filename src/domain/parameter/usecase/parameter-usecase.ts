import {
  catchError,
  map,
  firstValueFrom,
  from
} from 'rxjs'

import { ParameterProvider } from '@domain/parameter/providers'
import { ParameterRepository } from '@domain/parameter/repositories/'
import { ParameterMapping } from '@domain/parameter/mappings'

export class ParameterUseCase implements ParameterRepository {
  constructor(
    public _parameterProvider: ParameterProvider,
    private _parameterMapping: ParameterMapping
  ) {}

  getAll = (types_param: string): Promise<any> => {
    const source$ = from(this._parameterProvider.getAll(types_param)).pipe(
      map((response: any)=> response.body),
      map(this._parameterMapping.toParameters),
      catchError((error) => this._parameterMapping.toError(error))
    )
    return firstValueFrom(source$)
  }
}
