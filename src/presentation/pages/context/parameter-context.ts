import { createContext } from 'react'
import {Selector} from '@domain/common/model/selector'
import { User } from '@domain/user'
import { Profile } from '@domain/profiles'

type ParameterContext = {
  isLoading: boolean
  type_document: Selector[]
  type_profiles: Selector[]
  listUsers: User[]
  listProfiles: Profile[]
  setListUsers: (users: User[]) => void
  setListProfiles: (profiels: Profile[]) => void
}
const defaultContent: ParameterContext = {
  isLoading: false,
  type_document: [],
  type_profiles: [],
  listUsers:[],
  listProfiles: [],
  setListUsers: ([])=>{},
  setListProfiles: ([])=>{}
}

export const ParameterManageContext =
  createContext<ParameterContext>(defaultContent)
