import React, { useContext } from 'react'
import { Box, Grid } from '@mui/material'
import SelectComponent from '@presentation/components/select'
import InputTextComponent from '@presentation/components/input-text'
import ButtonComponent from '@presentation/components/button'
import FileComponent from '@presentation/components/file-component'
import useFormUser from '@presentation/pages/manage-users/users-new/components/user-form/hooks/use-form-user'
import './styles.scss'
import { UserRepository } from '@domain/user'

type Props = {
  repository: UserRepository
}

function UserForm({repository}: Props) {
  const {
    handleFileChange,
    handleFileClear,
    handleSubmit,
    onSubmit,
    control,
    errors,
    type_document,
    type_profiles,
    file,
    idTipDoc,
    isLoadingCreate
  } = useFormUser({repository})
  console.log('type_document ', type_document)
  return (
    <Box width="100%" marginTop="30px">
      <form className="form-user" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box marginBottom="20px">
              <SelectComponent
                name="idTipDoc"
                control={control}
                data={type_document}
                idLabel="type_document_label"
                idSelect="type_document_select"
                label="Tipo de documento"
                error={!!errors?.idTipDoc}
                helperText={errors?.idTipDoc?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Documento"
                name="numDoc"
                control={control}
                id="number_document"
                type="text"
                maxLength={idTipDoc === "00001" ? 8 : 9}
                helperText={errors?.numDoc?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Código"
                name="codigo"
                control={control}
                id="codigo"
                type="text"
                helperText={errors?.codigo?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Nombre"
                name="nombre"
                control={control}
                id="nombre"
                type="text"
                helperText={errors?.nombre?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Apellido Paterno"
                name="apePat"
                control={control}
                id="apePat"
                type="text"
                helperText={errors?.apePat?.message as string}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Apellido Materno"
                name="apeMat"
                control={control}
                id="apeMat"
                type="text"
                helperText={errors?.apeMat?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Correo"
                name="email"
                control={control}
                id="email"
                type="text"
                helperText={errors?.email?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Celular"
                name="celular"
                control={control}
                id="celular"
                type="text"
                maxLength={9}
                helperText={errors?.celular?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <SelectComponent
                name="idPerfil"
                control={control}
                data={type_profiles}
                idLabel="type_profile_label"
                idSelect="type_profile_select"
                label="Perfil"
                error={!!errors?.idPerfil}
                helperText={errors?.idPerfil?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Usuario"
                name="login"
                control={control}
                id="login"
                type="text"
                helperText={errors?.login?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Clave"
                name="clave"
                control={control}
                id="clave"
                type="password"
                helperText={errors?.clave?.message as string}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <FileComponent
              file={file as File}
              handleClear={() => handleFileClear()}
              handleChange={(fileList: FileList) => handleFileChange(fileList)}
              error={!!errors.file}
              helperText={errors.file?.message as string}
              name={'file'}
            />
          </Grid>
          <Grid item container xs={12}>
            <Box width="100%" maxWidth="200px">
              <ButtonComponent disabled={isLoadingCreate} title="Guardar" type="submit" />
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default UserForm
