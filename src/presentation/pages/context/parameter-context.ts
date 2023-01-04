import { createContext } from 'react'
import { Selector } from '@domain/common/model/selector'
import { User } from '@domain/user'
import { Profile } from '@domain/profiles'
import { ProjectResponse } from '@domain/project'
import { ParticipantResponse } from '@domain/participant'

type ParameterContext = {
  isLoading: boolean
  estadoProyecto: Selector[]
  type_document: Selector[]
  type_profiles: Selector[]
  listUsers: User[]
  listProfiles: Profile[]
  listProjects: ProjectResponse[]
  listParticipants: ParticipantResponse[]
  listStatusParticipant: Selector[]
  saludEdad: Selector[]
  saludSexo: Selector[]
  saludOtrosDep: Selector[]
  saludCondicAloj: Selector[]
  saludRedSoportePeru: Selector[]
  saludNivelEduc: Selector[]
  saludIngresoPromMen: Selector[]
  saludIdentGenero: Selector[]
  saludOrientacSexual: Selector[]
  saludEmbarazo: Selector[]
  saludHacinamiento: Selector[]
  saludCondicMigrat: Selector[]
  saludCondicLaboral: Selector[]
  saludDependientes: Selector[]
  saludCondicFisica: Selector[]
  saludSobrevVBG: Selector[]
  saludDocumentPosee: Selector[]
  saludSeguroSalud: Selector[]
  saludNacionalidad: Selector[]
  isLoadingSalud: boolean
  isLoadingVida: boolean
  vidaCondicAloj: Selector[]
  vidaSexo: Selector[]
  vidaOtrosDep: Selector[]
  vidaRedSoportePeru: Selector[]
  vidaNivelEduc: Selector[]
  vidaIngresoPromMen: Selector[]
  vidaIdentGenero: Selector[]
  vidaOrientacSexual: Selector[]
  vidaEmbarazo: Selector[]
  vidaHacinamiento: Selector[]
  vidaCondicMigrat: Selector[]
  vidaCondicLaboral: Selector[]
  vidaDependientes: Selector[]
  vidaCondicFisica: Selector[]
  vidaSobrevVBG: Selector[]
  vidaDocumentPosee: Selector[]
  vidaSeguroSalud: Selector[]
  vidaNacionalidad: Selector[]
  vidaEdad: Selector[]
  vidaHorasTrabajo: Selector[]
  vidaFamDirectos: Selector[]
  vidaTipoResidencia: Selector[]
  setListProjects: (projects: ProjectResponse[]) => void
  setListUsers: (users: User[]) => void
  setListProfiles: (profiels: Profile[]) => void
  setListParticipants: (participants: ParticipantResponse[]) => void
}
const defaultContent: ParameterContext = {
  isLoadingVida: false,
  isLoading: false,
  isLoadingSalud: false,
  listStatusParticipant: [],
  estadoProyecto: [],
  type_document: [],
  type_profiles: [],
  listUsers: [],
  listProfiles: [],
  listProjects: [],
  listParticipants: [],
  saludEdad: [],
  saludSexo: [],
  saludOtrosDep: [],
  saludCondicAloj: [],
  saludRedSoportePeru: [],
  saludNivelEduc: [],
  saludIngresoPromMen: [],
  saludIdentGenero: [],
  saludOrientacSexual: [],
  saludEmbarazo: [],
  saludHacinamiento: [],
  saludCondicMigrat: [],
  saludCondicLaboral: [],
  saludDependientes: [],
  saludCondicFisica: [],
  saludSobrevVBG: [],
  saludDocumentPosee: [],
  saludSeguroSalud: [],
  saludNacionalidad: [],
  vidaCondicAloj: [],
  vidaSexo: [],
  vidaOtrosDep: [],
  vidaRedSoportePeru: [],
  vidaNivelEduc: [],
  vidaIngresoPromMen: [],
  vidaIdentGenero: [],
  vidaOrientacSexual: [],
  vidaEmbarazo: [],
  vidaHacinamiento: [],
  vidaCondicMigrat: [],
  vidaCondicLaboral: [],
  vidaDependientes: [],
  vidaCondicFisica: [],
  vidaSobrevVBG: [],
  vidaDocumentPosee: [],
  vidaSeguroSalud: [],
  vidaNacionalidad: [],
  vidaEdad: [],
  vidaHorasTrabajo: [],
  vidaFamDirectos: [],
  vidaTipoResidencia: [],
  setListProjects: () => {},
  setListUsers: () => {},
  setListProfiles: () => {},
  setListParticipants: () => {}
}

export const ParameterManageContext =
  createContext<ParameterContext>(defaultContent)
