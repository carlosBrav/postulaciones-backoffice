import { createContext } from 'react'
import {Selector} from '@domain/common/model/selector'
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
  setListProjects: ([]) => {},
  setListUsers: ([]) => {},
  setListProfiles: ([]) => {},
  setListParticipants: ([]) => {}
}

export const ParameterManageContext =
  createContext<ParameterContext>(defaultContent)
