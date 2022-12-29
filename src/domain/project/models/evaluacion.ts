import { BaseModel } from '@domain/common/model/base-model'

class Evaluacion extends BaseModel {
  idProyecto: number = 0
  idEvaluacion: number = 0
  dscEvaluacion: string = ''
}

export { Evaluacion }
