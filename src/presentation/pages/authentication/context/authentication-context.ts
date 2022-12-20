import { createContext } from 'react'
import {Selector} from '@domain/common/model/selector'

type AuthenticationContext = {
  isAuthenticated: boolean
  setIsAuthenticated: (status: boolean) => void
  handleSignIn: (data: any) => void
  handleLogOut: () => void
}
const defaultContent: AuthenticationContext = {
  isAuthenticated: false,
  setIsAuthenticated: (status: boolean) => {},
  handleSignIn: (data: any) => {},
  handleLogOut: () => {}
}

export const AuthenticationManageContext =
  createContext<AuthenticationContext>(defaultContent)
