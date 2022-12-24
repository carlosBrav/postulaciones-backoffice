import {
  catchError,
  map,
  firstValueFrom,
  from
} from 'rxjs'

import { ParameterProvider } from '@domain/parameter/providers'
import { ParameterRepository } from '@domain/parameter/repositories/'
import { ParameterMapping } from '@domain/parameter/mappings'
import { Criteria } from '../models'

export class ParameterUseCase implements ParameterRepository {
  constructor(
    public _parameterProvider: ParameterProvider,
    private _parameterMapping: ParameterMapping
  ) {}

  getAllCriteria(typeCalculo: string, typeParam: string): Promise<Criteria[]> {
    const source$ = from(
      this._parameterProvider.getAllCriteria(typeCalculo, typeParam)
    ).pipe(
      map((response: any) => response.body),
      map(this._parameterMapping.toCriteria),
      catchError((error) => this._parameterMapping.toError(error))
    )
    return firstValueFrom(source$) as Promise<Criteria[]>
  }

  getAll = (types_param: string): Promise<any> => {
    const source$ = from(this._parameterProvider.getAll(types_param)).pipe(
      map((response: any) => response.body),
      map(this._parameterMapping.toParameters),
      catchError((error) => this._parameterMapping.toError(error))
    )
    return firstValueFrom(source$)
  }
}
