import { BaseModel } from '@domain/common/model/base-model'

class ParticipanteExcel extends BaseModel {
  nomParticipante: string = ''
  dscTipDoc: string = ''
  numDoc: string = ''
  dscEstado: string = ''
  dscResultado: string = ''
  scoreSalPro: number = 0
  scoreMedVid: number = 0
  scorePotEmp: number = 0
  scorePitch: number = 0
  scoreEntrev: number = 0
}

export { ParticipanteExcel }
