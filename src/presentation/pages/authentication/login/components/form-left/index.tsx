import React from 'react'
import { Box, Grid } from '@mui/material'
import LoginImage from '@presentation/assets/images/png/logo_alma_llanera.png'
import TextCommon from '@presentation/components/text-common'
import './styles.scss'

const FormRight = () => {
  return (
    <Grid item md={7} display={{ sm: 'none', md: 'block' }}>
      <div className="form-left">
        <Box
          width="100%"
          height="100%"
          paddingTop="40px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box maxWidth="65%" paddingLeft="5rem">
            <Box marginBottom="40px">
              <TextCommon
                text="Sistema de selección de emprendedores"
                fontSize="25px"
                type="secondary"
              />
            </Box>
            <Box marginBottom="40px">
              <TextCommon
                text="¡Bienvenido!"
                fontSize="20px"
                type="secondary"
              />
            </Box>
            <Box>
              <TextCommon
                text="Una plataforma donde puedes gestionar tu proceso de selección,
                evaluación y aprobación de emprendedores"
                fontSize="15px"
                type="secondary"
              />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <img width="400px" height="300px" alt="image" src={LoginImage} />
          </Box>
        </Box>
      </div>
    </Grid>
  )
}

export default FormRight
