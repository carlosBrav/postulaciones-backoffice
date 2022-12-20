import { Grid } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import FormLeft from '@presentation/pages/authentication/login/components/form-left'
import FormRight from '@presentation/pages/authentication/login/components/form-right'
import { AuthenticationRepository } from '@domain/authentication/repositories/authentication-repository'
import './styles.scss'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { AuthenticationManageContext } from '../context/authentication-context'
import {useNavigate} from 'react-router-dom'

type Props = {
  auth: AuthenticationRepository
}

function Login({ auth }: Props) {
  const navigate = useNavigate()
  const { isLoading } = useContext(ParameterManageContext)
  const { isAuthenticated } = useContext(AuthenticationManageContext)

  useEffect(()=>{
    if(isAuthenticated){
      navigate("/dashboard")
    }
  },[isAuthenticated])

  return (
    <Grid container>
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <>
          <FormLeft />
          <FormRight auth={auth} />
        </>
      )}
    </Grid>
  )
}

export default Login
