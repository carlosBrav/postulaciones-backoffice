import {Parameter} from '@domain/parameter/models'

export interface ParameterRepository {
  getAll(types_param: string): Promise<Parameter[]>
}
