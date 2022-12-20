import React, { HTMLProps, useEffect, useState } from 'react'
import { AuthenticationManageContext } from './authentication-context'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'

type Props = {
  test?: string
} & HTMLProps<HTMLDivElement>

function AuthenticationProvider({ test, children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const {saveAuthToken, deleteToken, getAuthToken} = useAuthToken()

  const handleSignIn = (data: any) => {
    saveAuthToken(import.meta.env.VITE_APP_PARAM_AUTH as string, data)
    setIsAuthenticated(true)
  }

  const handleLogOut = () => {
    deleteToken(import.meta.env.VITE_APP_PARAM_AUTH)
    setIsAuthenticated(false)
  }

  useEffect(()=>{
    if(getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH as string)){
      setIsAuthenticated(true)
    }
  },[])


  return (
    <AuthenticationManageContext.Provider
      value={{
        //typeDocument,
        isAuthenticated,
        //isLoading,
        setIsAuthenticated,
        handleSignIn,
        handleLogOut
      }}
    >
      {children}
    </AuthenticationManageContext.Provider>
  )
}

export default AuthenticationProvider
