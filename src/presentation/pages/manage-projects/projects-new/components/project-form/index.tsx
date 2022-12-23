import React from 'react'
import { Box, Grid } from '@mui/material'
import SelectComponent from '@presentation/components/select'
import InputTextComponent from '@presentation/components/input-text'
import ButtonComponent from '@presentation/components/button'
import useFormProject from '@presentation/pages/manage-projects/projects-new/components/project-form/hooks/use-form-project'
import './styles.scss'
import { ProjectRepository } from '@domain/project'

type Props = {
  repository: ProjectRepository
}

function ProjectForm({ repository }: Props) {
  const { handleSubmit, onSubmit, control, errors, isLoadingCreate } =
    useFormProject({ repository })

  return (
    <Box width="100%" marginTop="30px">
      <form className="form-user" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box marginBottom="20px">
              <SelectComponent
                name="idEstado"
                control={control}
                data={[]}
                idLabel="idEstado_label"
                idSelect="idEstado_select"
                label="Estado"
                error={!!errors?.idEstado}
                helperText={errors?.idEstado?.message as string}
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
                label="Descripción"
                name="descripcion"
                control={control}
                id="descripcion"
                type="text"
                helperText={errors?.descripcion?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Jefe"
                name="jefe"
                control={control}
                id="jefe"
                type="text"
                helperText={errors?.jefe?.message as string}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Términos"
                name="terminos"
                control={control}
                id="terminos"
                type="text"
                helperText={errors?.terminos?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Landing"
                name="terminos"
                control={control}
                id="terminos"
                type="text"
                helperText={errors?.terminos?.message as string}
              />
            </Box>
            <Box marginBottom="20px">
              <InputTextComponent
                label="Landing"
                name="landing"
                control={control}
                id="landing"
                type="text"
                maxLength={9}
                helperText={errors?.landing?.message as string}
              />
            </Box>
          </Grid>

          <Grid item container xs={12}>
            <Box width="100%" maxWidth="200px">
              <ButtonComponent
                disabled={isLoadingCreate}
                title="Guardar"
                type="submit"
              />
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default ProjectForm
