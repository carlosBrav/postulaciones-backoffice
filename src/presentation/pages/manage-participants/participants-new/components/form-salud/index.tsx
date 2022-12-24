import React from 'react'
import SelectComponent from '@presentation/components/select'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useCriteriaSalud } from './hooks/use-criteria-salud'
import { ParameterRepository } from '@domain/parameter'

type Props = {
  control: any
  errors: any
  parameter: ParameterRepository
}

function FormSalud({ control, errors, parameter }: Props) {
  const {
    isLoading,
    condicAloj,
    sexo,
    otrosDep,
    redSoportePeru,
    nivelEduc,
    ingresoPromMen,
    identGenero,
    orientacSexual,
    embarazo,
    hacinamiento,
    condicMigrat,
    condicLaboral,
    dependientes,
    condicFisica,
    sobrevVBG,
    documentPosee,
    seguroSalud,
    nacionalidad,
    edad
  } = useCriteriaSalud(parameter)
  return (
    <Grid container>
      <Grid item container spacing={2} xs={12}>
        <Grid item md={4} xs={12}>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idSexo"
              control={control}
              data={sexo}
              idLabel="sexo_label"
              idSelect="sexo_select"
              label="Sexo"
              error={!!errors?.salud_idSexo}
              helperText={errors?.salud_idSexo?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idOtrosDependientes"
              control={control}
              data={otrosDep}
              idLabel="otros_dep_label"
              idSelect="otros_dep_select"
              label="Otros Dependientes"
              error={!!errors?.salud_idOtrosDependientes}
              helperText={errors?.salud_idOtrosDependientes?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idCondAlojamiento"
              control={control}
              data={condicAloj}
              idLabel="cond_alojam_label"
              idSelect="cond_alojam_select"
              label="Condición de Alojamiento"
              error={!!errors?.salud_idCondAlojamiento}
              helperText={errors?.salud_idCondAlojamiento?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idRedSoporte"
              control={control}
              data={redSoportePeru}
              idLabel="red_soporte_label"
              idSelect="red_soporte_select"
              label="Red de Soporte en Perú"
              error={!!errors?.salud_idRedSoporte}
              helperText={errors?.salud_idRedSoporte?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idNivelEducativo"
              control={control}
              data={nivelEduc}
              idLabel="nivel_educativo_label"
              idSelect="nivel_educativo_select"
              label="Nivel Educativo"
              error={!!errors?.salud_idNivelEducativo}
              helperText={errors?.salud_idNivelEducativo?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idIngresoProm"
              control={control}
              data={ingresoPromMen}
              idLabel="ingreso_prom_label"
              idSelect="ingreso_prom_select"
              label="Ingreso Promedio Mensual"
              error={!!errors?.salud_idIngresoProm}
              helperText={errors?.salud_idIngresoProm?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idIdentGenero"
              control={control}
              data={identGenero}
              idLabel="ident_genero_label"
              idSelect="ident_genero_select"
              label="Identidad de Género"
              error={!!errors?.salud_idIdentGenero}
              helperText={errors?.salud_idIdentGenero?.message as string}
              disabled={isLoading}
            />
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idOrientacion"
              control={control}
              data={orientacSexual}
              idLabel="orientac_sex_label"
              idSelect="orientac_sex_select"
              label="Orientación sexual"
              error={!!errors?.salud_idOrientacion}
              helperText={errors?.salud_idOrientacion?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idEmbarazo"
              control={control}
              data={embarazo}
              idLabel="embarazo_label"
              idSelect="embarazo_select"
              label="Embarazo | Lactancia"
              error={!!errors?.salud_idEmbarazo}
              helperText={errors?.salud_idEmbarazo?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idHacimiento"
              control={control}
              data={hacinamiento}
              idLabel="hacinamiento_label"
              idSelect="hacinamiento_select"
              label="Hacinamiento"
              error={!!errors?.salud_idHacimiento}
              helperText={errors?.salud_idHacimiento?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idCondMigratoria"
              control={control}
              data={condicMigrat}
              idLabel="cond_migrat_label"
              idSelect="cond_migrat_select"
              label="Condición Migratoria"
              error={!!errors?.salud_idCondMigratoria}
              helperText={errors?.salud_idCondMigratoria?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idCondLaboral"
              control={control}
              data={condicLaboral}
              idLabel="condic_laboral_label"
              idSelect="condic_laboral_select"
              label="Condición Laboral"
              error={!!errors?.salud_idCondLaboral}
              helperText={errors?.salud_idCondLaboral?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idEdad"
              control={control}
              data={edad}
              idLabel="edad_label"
              idSelect="edad_select"
              label="Edad"
              error={!!errors?.salud_idEdad}
              helperText={errors?.salud_idEdad?.message as string}
              disabled={isLoading}
            />
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idDependientes"
              control={control}
              data={dependientes}
              idLabel="dependientes_label"
              idSelect="dependientes_select"
              label="Dependientes (menores de 5 años)"
              error={!!errors?.salud_idDependientes}
              helperText={errors?.salud_idDependientes?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idCondFisica"
              control={control}
              data={condicFisica}
              idLabel="condicion_fisica_label"
              idSelect="condicion_fisica_select"
              label="Condición Física"
              error={!!errors?.salud_idCondFisica}
              helperText={errors?.salud_idCondFisica?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idSobreviviente"
              control={control}
              data={sobrevVBG}
              idLabel="sobreviviente_vbg_label"
              idSelect="sobreviviente_vbg_select"
              label="Sobreviviente de VBG"
              error={!!errors?.salud_idSobreviviente}
              helperText={errors?.salud_idSobreviviente?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idDocPosee"
              control={control}
              data={documentPosee}
              idLabel="doc_posee_label"
              idSelect="doc_posee_select"
              label="Documento que posee"
              error={!!errors?.salud_idDocPosee}
              helperText={errors?.salud_idDocPosee?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idSeguroSalud"
              control={control}
              data={seguroSalud}
              idLabel="seguro_salud_label"
              idSelect="seguro_salud_select"
              label="Seguro de Salud"
              error={!!errors?.salud_idSeguroSalud}
              helperText={errors?.salud_idSeguroSalud?.message as string}
              disabled={isLoading}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="salud_idNacionalidad"
              control={control}
              data={nacionalidad}
              idLabel="nacionalidad_label"
              idSelect="nacionalidad_select"
              label="Nacionalidad"
              error={!!errors?.salud_idNacionalidad}
              helperText={errors?.salud_idNacionalidad?.message as string}
              disabled={isLoading}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FormSalud
