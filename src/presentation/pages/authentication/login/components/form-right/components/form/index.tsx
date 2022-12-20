import { Box } from '@mui/material'
import ButtonComponent from '@presentation/components/button'
import LinkComponent from '@presentation/pages/authentication/login/components/form-right/components/link-common'
import InputTextComponent from '@presentation/components/input-text'
import useFormLogin from '@presentation/pages/authentication/login/components/form-right/components/form/hooks/use-form-login'
import SelectComponent from '@presentation/components/select'
import React from 'react'
import { AuthenticationRepository } from '@domain/authentication/repositories/authentication-repository'

type Props = {
  auth: AuthenticationRepository
}

function FormComponent({ auth }: Props) {
  const { onSubmit, handleSubmit, control, type_document } = useFormLogin(auth)
  console.log('type_document ', type_document)
  return (
    <Box minWidth="60%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box marginBottom="30px">
          <SelectComponent
            name="document_type"
            control={control}
            data={type_document}
            idLabel="type_document_label"
            idSelect="type_document_select"
            label="Tipo de documento"
          />
        </Box>
        <Box marginBottom="30px">
          <InputTextComponent
            label="Documento"
            name="document_number"
            control={control}
            id="number_document"
            type="text"
          />
        </Box>
        <Box marginBottom="30px">
          <InputTextComponent
            type="password"
            label="Contraseña"
            name="password"
            control={control}
            id="password_user"
          />
        </Box>
        <Box marginBottom="30px">
          <LinkComponent text="¿Olvidaste tu contraseña?" onClick={() => {}} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box width="200px">
            <ButtonComponent type="submit" title="Ingresar" />
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default FormComponent
