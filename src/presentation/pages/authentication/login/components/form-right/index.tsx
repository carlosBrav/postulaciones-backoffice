import { Box, Grid } from '@mui/material'
import React from 'react'
import TextComponent from '@presentation/components/text-common'
import FormComponent from '@presentation/pages/authentication/login/components/form-right/components/form'
import './styles.scss'
import { AuthenticationRepository } from '@domain/authentication/repositories/authentication-repository'

type Props ={
  auth: AuthenticationRepository
}

const FormRight = ({auth}: Props) => {
  return (
    <Grid item md={5} xs={12}>
      <div className="form-right">
        <Box
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="20px"
          >
            <Box marginTop="30px" marginBottom="50px">
              <TextComponent
                text="Iniciar Sesión"
                fontSize="20px"
                type="primary"
              />
            </Box>
            <FormComponent auth={auth}/>
          </Box>
        </Box>
      </div>
    </Grid>
  )
}

export default FormRight
