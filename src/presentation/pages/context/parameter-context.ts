import { createContext } from 'react'
import { Selector } from '@domain/common/model/selector'
import { User } from '@domain/user'
import { Profile } from '@domain/profiles'
import {
  Participante,
  ParticipantEvaluation,
  ProjectResponse
} from '@domain/project'
import { ParticipantResponse } from '@domain/participant'
import { ParticipantEvaluationSecInd } from '@domain/project/models/participant-evaluation-sec-ind'

type ParameterContext = {
  statusEP: boolean
  setStatusEP: (data: boolean) => void
  statusEM: boolean
  setStatusEM: (data: boolean) => void
  statusPitch: boolean
  setStatusPitch: (data: boolean) => void
  statusEnt: boolean
  setStatusEnt: (data: boolean) => void
  evaluation1: ParticipantEvaluation | null
  setEvaluation1: (data: ParticipantEvaluation) => void
  evaluation2: ParticipantEvaluation | null
  setEvaluation2: (data: ParticipantEvaluation) => void
  evaluation3: ParticipantEvaluation | null
  setEvaluation3: (data: ParticipantEvaluation) => void
  evaluation4: ParticipantEvaluation | null
  setEvaluation4: (data: ParticipantEvaluation) => void
  evaluation5: ParticipantEvaluation | null
  setEvaluation5: (data: ParticipantEvaluation) => void
  isLoading: boolean
  estadoProyecto: Selector[]
  type_document: Selector[]
  type_profiles: Selector[]
  listUsers: User[]
  listProfiles: Profile[]
  listProjects: ProjectResponse[]
  listParticipants: ParticipantResponse[]
  listParticipantsProject: Participante[]
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
  pitchEvalSecInd: ParticipantEvaluationSecInd[]
  entrevistaEvalSecInd: ParticipantEvaluationSecInd[]
  setEntrevistaEvalSecInd: (data: ParticipantEvaluationSecInd[]) => void
  setPitchEvalSecInd: (data: ParticipantEvaluationSecInd[]) => void
  setListParticipantsProject: (data: Participante[]) => void
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
  listParticipantsProject: [],
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
  entrevistaEvalSecInd: [],
  statusEP: false,
  setStatusEP: () => {},
  statusEM: false,
  setStatusEM: () => {},
  statusPitch: false,
  setStatusPitch: () => {},
  statusEnt: false,
  setStatusEnt: () => {},
  setEntrevistaEvalSecInd: () => {},
  evaluation1: null,
  setEvaluation1: () => {},
  evaluation2: null,
  setEvaluation2: () => {},
  evaluation3: null,
  setEvaluation3: () => {},
  evaluation4: null,
  setEvaluation4: () => {},
  evaluation5: null,
  pitchEvalSecInd: [],
  setPitchEvalSecInd: () => {},
  setEvaluation5: () => {},
  setListParticipantsProject: () => {},
  setListProjects: () => {},
  setListUsers: () => {},
  setListProfiles: () => {},
  setListParticipants: () => {}
}

export const ParameterManageContext =
  createContext<ParameterContext>(defaultContent)
