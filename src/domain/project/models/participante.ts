import { BaseModel } from '@domain/common/model/base-model'

class Participante extends BaseModel {
  idProyecto: number = 0
  idParticipante: number = 0
  idEstado: string = ''
  idResultado: string = ''
  nomProyecto: string = ''
  nomParticipante: string = ''
  dscEstado: string = ''
  dscResultado: string = ''
  scoreSalPro: number = 0
  scoreMedVid: number = 0
  scorePotEmp: number = 0
  scorePitch: number = 0
  scoreEntrev: number = 0
  idTipDoc: string = ''
  numDoc: string = ''
  dscTipDoc: string = ''
}

export { Participante }
