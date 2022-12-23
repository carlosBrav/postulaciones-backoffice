import React from 'react'
import SelectComponent from '@presentation/components/select'
import InputTextComponent from '@presentation/components/input-text'
import CheckBoxComponent from '@presentation/components/checkbox'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

type Props = {
  control: any
  errors: any
}

function FormGeneral({ control, errors }: Props) {
  return (
    <Grid container>
      <Grid item container spacing={2} xs={12}>
        <Grid item md={4} xs={12}>
          <Box marginBottom="20px">
            <SelectComponent
              name="idTipDoc"
              control={control}
              data={[]}
              idLabel="type_document_label"
              idSelect="type_document_select"
              label="Tipo de documento"
              error={!!errors?.idTipDoc}
              helperText={errors?.idTipDoc?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <InputTextComponent
              label="Nombres"
              name="nombre"
              control={control}
              id="name"
              type="text"
              helperText={errors?.nombre?.message as string}
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
              label="Provincia"
              name="provincia"
              control={control}
              id="provincia"
              type="text"
              helperText={errors?.provincia?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <InputTextComponent
              label="Fecha de Nacimiento"
              name="fecNacimiento"
              control={control}
              id="fecNacimiento"
              type="text"
              helperText={errors?.fecNacimiento?.message as string}
            />
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box marginBottom="20px">
            <InputTextComponent
              label="Número de documento"
              name="numDoc"
              control={control}
              id="numDoc"
              type="text"
              helperText={errors?.numDoc?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <InputTextComponent
              label="Apellido Paterno"
              name="apellidoPaterno"
              control={control}
              id="apellidoPaterno"
              type="text"
              helperText={errors?.apellidoPaterno?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <InputTextComponent
              label="Teléfono"
              name="fono"
              control={control}
              id="fono"
              type="text"
              helperText={errors?.fono?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <InputTextComponent
              label="Región"
              name="region"
              control={control}
              id="region"
              type="text"
              helperText={errors?.region?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <InputTextComponent
              label="Fecha de Vencimiento"
              name="fecVencimiento"
              control={control}
              id="fecVencimiento"
              type="text"
              helperText={errors?.fecVencimiento?.message as string}
            />
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box marginBottom="20px">
            <SelectComponent
              name="aniosEmprendimiento"
              control={control}
              data={[]}
              idLabel="aniosEmprendimiento_label"
              idSelect="aniosEmprendimiento_select"
              label="Años de emprendimiento"
              error={!!errors?.aniosEmprendimiento}
              helperText={errors?.aniosEmprendimiento?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <InputTextComponent
              label="Apellido materno"
              name="apellMaterno"
              control={control}
              id="apellMaterno"
              type="text"
              helperText={errors?.apellMaterno?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <InputTextComponent
              label="Distrito"
              name="distrito"
              control={control}
              id="distrito"
              type="text"
              helperText={errors?.distrito?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="edad"
              control={control}
              data={[]}
              idLabel="edad_label"
              idSelect="edad_select"
              label="Edad"
              error={!!errors?.edad}
              helperText={errors?.edad?.message as string}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item md={4} xs={12}>
          <Box marginBottom="10px">
            <CheckBoxComponent
              control={control}
              label="Acceso a Tecnología"
              name="flagAccesoTecno"
            />
          </Box>
          <Box marginBottom="10px">
            <CheckBoxComponent
              control={control}
              label="Emprendimiento"
              name="flagEmprendimiento"
            />
          </Box>
          <Box marginBottom="10px">
            <CheckBoxComponent
              control={control}
              label="Vende por Internet"
              name="flagVentaInternet"
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FormGeneral
