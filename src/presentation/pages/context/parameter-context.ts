import { createContext } from 'react'
import { Selector } from '@domain/common/model/selector'
import { User } from '@domain/user'
import { Profile } from '@domain/profiles'
import { ProjectResponse } from '@domain/project'
import { ParticipantResponse } from '@domain/participant'

type ParameterContext = {
  isLoading: boolean
  type_document: Selector[]
  type_profiles: Selector[]
  listUsers: User[]
  listProfiles: Profile[]
  listProjects: ProjectResponse[]
  listParticipants: ParticipantResponse[]
  edad: Selector[]
  sexo: Selector[]
  otrosDep: Selector[]
  condicAloj: Selector[]
  redSoportePeru: Selector[]
  nivelEduc: Selector[]
  ingresoPromMen: Selector[]
  identGenero: Selector[]
  orientacSexual: Selector[]
  embarazo: Selector[]
  hacinamiento: Selector[]
  condicMigrat: Selector[]
  condicLaboral: Selector[]
  dependientes: Selector[]
  condicFisica: Selector[]
  sobrevVBG: Selector[]
  documentPosee: Selector[]
  seguroSalud: Selector[]
  nacionalidad: Selector[]
  setEdad: (data: Selector[]) => void
  setSexo: (data: Selector[]) => void
  setOtrosDep: (data: Selector[]) => void
  setCondicAloj: (data: Selector[]) => void
  setRedSoportePeru: (data: Selector[]) => void
  setNivelEduc: (data: Selector[]) => void
  setIngresoPromMen: (data: Selector[]) => void
  setIdentGenero: (data: Selector[]) => void
  setOrientacionSexual: (data: Selector[]) => void
  setEmbarazo: (data: Selector[]) => void
  setHacinamiento: (data: Selector[]) => void
  setCondicMigrat: (data: Selector[]) => void
  setCondicLaboral: (data: Selector[]) => void
  setDependientes: (data: Selector[]) => void
  setCondicFisica: (data: Selector[]) => void
  setSobrevVBG: (data: Selector[]) => void
  setDocumentPosee: (data: Selector[]) => void
  setSeguroSalud: (data: Selector[]) => void
  setNacionalidad: (data: Selector[]) => void
  setListProjects: (projects: ProjectResponse[]) => void
  setListUsers: (users: User[]) => void
  setListProfiles: (profiels: Profile[]) => void
  setListParticipants: (participants: ParticipantResponse[]) => void
}
const defaultContent: ParameterContext = {
  isLoading: false,
  type_document: [],
  type_profiles: [],
  listUsers: [],
  listProfiles: [],
  listProjects: [],
  listParticipants: [],
  edad: [],
  sexo: [],
  otrosDep: [],
  condicAloj: [],
  redSoportePeru: [],
  nivelEduc: [],
  ingresoPromMen: [],
  identGenero: [],
  orientacSexual: [],
  embarazo: [],
  hacinamiento: [],
  condicMigrat: [],
  condicLaboral: [],
  dependientes: [],
  condicFisica: [],
  sobrevVBG: [],
  documentPosee: [],
  seguroSalud: [],
  nacionalidad: [],
  setEdad: ([]) => {},
  setSexo: ([]) => {},
  setOtrosDep: ([]) => {},
  setCondicAloj: ([]) => {},
  setRedSoportePeru: ([]) => {},
  setNivelEduc: ([]) => {},
  setIngresoPromMen: ([]) => {},
  setIdentGenero: ([]) => {},
  setOrientacionSexual: ([]) => {},
  setEmbarazo: ([]) => {},
  setHacinamiento: ([]) => {},
  setCondicMigrat: ([]) => {},
  setCondicLaboral: ([]) => {},
  setDependientes: ([]) => {},
  setCondicFisica: ([]) => {},
  setSobrevVBG: ([]) => {},
  setDocumentPosee: ([]) => {},
  setSeguroSalud: ([]) => {},
  setNacionalidad: ([]) => {},
  setListProjects: ([]) => {},
  setListUsers: ([]) => {},
  setListProfiles: ([]) => {},
  setListParticipants: ([]) => {}
}

export const ParameterManageContext =
  createContext<ParameterContext>(defaultContent)
