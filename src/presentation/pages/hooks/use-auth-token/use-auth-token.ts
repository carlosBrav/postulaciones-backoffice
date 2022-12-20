import AuthToken from '@presentation/libs/auth-token'
import SecureToken from '@presentation/libs/secure-token'
import { User } from '@domain/authentication/models/user'

export default function useAuthToken() {
  const saveAuthToken = (key: string, authData: any) => {
    AuthToken.setToken(
      SecureToken.encodeToken(key),
      SecureToken.encodeToken(JSON.stringify(authData))
    )
  }

  const getAuthToken = (key: string): User | null => {
    const encodeTken = SecureToken.encodeToken(key)
    const existToken =  AuthToken.getToken(encodeTken)
    if(!existToken) return null
    return User.fromJson(
      JSON.parse(
        SecureToken.decodeToken(
          existToken as string
        ) as string
      )
    ) as User
  }

  const deleteToken = (key: string) => {
    AuthToken.deleteToken(SecureToken.encodeToken(key))
  }

  return {
    saveAuthToken,
    getAuthToken,
    deleteToken,
  }
}
