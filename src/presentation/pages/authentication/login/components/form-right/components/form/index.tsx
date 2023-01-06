import { Box, FormHelperText } from '@mui/material'
import { ButtonComponent } from '@presentation/components/button'
import LinkComponent from '@presentation/pages/authentication/login/components/form-right/components/link-common'
import InputTextComponent from '@presentation/components/input-text'
import InputNumericComponent from '@presentation/components/input-text/numeric'
import useFormLogin from '@presentation/pages/authentication/login/components/form-right/components/form/hooks/use-form-login'
import SelectComponent from '@presentation/components/select'
import React, { useEffect, useState } from 'react'
import { AuthenticationRepository } from '@domain/authentication/repositories/authentication-repository'

type Props = {
  auth: AuthenticationRepository
}

function FormComponent({ auth }: Props) {
  const {
    onSubmit,
    handleSubmit,
    setValue,
    control,
    type_document,
    errorAuth,
    document_number,
    document_type,
    error,
    errors,
    handleOchangeDocument,
    maxLength
  } = useFormLogin(auth)

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
            helperText={errors.document_type?.message as string}
          />
        </Box>
        <Box marginBottom="30px">
          <InputNumericComponent
            label="Documento"
            name="document_number"
            control={control}
            id="number_document"
            type="text"
            maxLength={maxLength}
            value={document_number}
            onChange={handleOchangeDocument}
            helperText={errors.document_number?.message as string}
          />
        </Box>
        <Box marginBottom="30px">
          <InputTextComponent
            type="password"
            label="Contraseña"
            name="password"
            control={control}
            id="password_user"
            helperText={errors.password?.message as string}
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
            <ButtonComponent
              variant="contained"
              type="submit"
              title="Ingresar"
            />
          </Box>
        </Box>
        {errorAuth && (
          <Box width="100%" marginTop="10px">
            <FormHelperText style={{ fontSize: 15 }} error>
              {error as string}
            </FormHelperText>
          </Box>
        )}
      </form>
    </Box>
  )
}

export default FormComponent
