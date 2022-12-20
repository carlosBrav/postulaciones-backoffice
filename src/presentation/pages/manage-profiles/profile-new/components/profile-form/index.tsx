import React, { useContext } from 'react'
import { Box, Grid } from '@mui/material'
import SelectComponent from '@presentation/components/select'
import InputTextComponent from '@presentation/components/input-text'
import ButtonComponent from '@presentation/components/button'
import FileComponent from '@presentation/components/file-component'
import useFormProfile from '@presentation/pages/manage-profiles/profile-new/components/profile-form/hooks/use-form-profile'
import './styles.scss'
import { ProfileRepository } from '@domain/profiles'

type Props = {
  repository: ProfileRepository
}

function ProfileForm({ repository }: Props) {
  const { handleSubmit, onSubmit, control, errors } = useFormProfile({
    repository,
  })

  return (
    <Box width="100%" marginTop="30px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item sm={6} md={4} lg={4} xs={12}>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Descripción"
                name="nombre"
                control={control}
                id="nombre"
                type="text"
                helperText={errors?.nombre?.message as string}
              />
            </Box>
          </Grid>
          <Grid item container xs={12}>
            <Box width="100%" maxWidth="200px">
              <ButtonComponent title="Guardar" type="submit" />
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default ProfileForm
