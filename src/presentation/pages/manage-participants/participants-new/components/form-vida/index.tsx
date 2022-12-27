import React from 'react'
import SelectComponent from '@presentation/components/select'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useCriteriaVida } from './hooks/use-criteria-vida'
import { ParameterRepository } from '@domain/parameter'

type Props = {
  control: any
  errors: any
}

function FormVida({
  control,
  errors,
}: Props) {
  const {
    isLoadingVida,
        vidaCondicAloj,
        vidaSexo,
        vidaOtrosDep,
        vidaRedSoportePeru,
        vidaNivelEduc,
        vidaIngresoPromMen,
        vidaIdentGenero,
        vidaOrientacSexual,
        vidaEmbarazo,
        vidaHacinamiento,
        vidaCondicMigrat,
        vidaCondicLaboral,
        vidaDependientes,
        vidaCondicFisica,
        vidaSobrevVBG,
        vidaDocumentPosee,
        vidaSeguroSalud,
        vidaNacionalidad,
        vidaEdad,
        vidaHorasTrabajo,
        vidaFamDirectos,
        vidaTipoResidencia,
  } = useCriteriaVida()
  return (
    <Grid container>
      <Grid item container spacing={2} xs={12}>
        <Grid item md={4} xs={12}>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idSexo"
              control={control}
              data={vidaSexo}
              idLabel="sexo_label"
              idSelect="sexo_select"
              label="Sexo"
              error={!!errors?.vida_idSexo}
              helperText={errors?.vida_idSexo?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idOtrosDependientes"
              control={control}
              data={vidaOtrosDep}
              idLabel="otros_dep_label"
              idSelect="otros_dep_select"
              label="Otros Dependientes"
              error={!!errors?.vida_idOtrosDependientes}
              helperText={errors?.vida_idOtrosDependientes?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idCondAlojamiento"
              control={control}
              data={vidaCondicAloj}
              idLabel="cond_alojam_label"
              idSelect="cond_alojam_select"
              label="Condición de Alojamiento"
              error={!!errors?.vida_idCondAlojamiento}
              helperText={errors?.vida_idCondAlojamiento?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idRedSoporte"
              control={control}
              data={vidaRedSoportePeru}
              idLabel="red_soporte_label"
              idSelect="red_soporte_select"
              label="Red de Soporte en Perú"
              error={!!errors?.vida_idRedSoporte}
              helperText={errors?.vida_idRedSoporte?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idNivelEducativo"
              control={control}
              data={vidaNivelEduc}
              idLabel="nivel_educativo_label"
              idSelect="nivel_educativo_select"
              label="Nivel Educativo"
              error={!!errors?.vida_idNivelEducativo}
              helperText={errors?.vida_idNivelEducativo?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idEdad"
              control={control}
              data={vidaEdad}
              idLabel="edad_label"
              idSelect="edad_select"
              label="Edad"
              error={!!errors?.vida_idEdad}
              helperText={errors?.vida_idEdad?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idFamDirectos"
              control={control}
              data={vidaFamDirectos}
              idLabel="idFamDirectos_label"
              idSelect="idFamDirectos_select"
              label="Familiares Directos"
              error={!!errors?.vida_idFamDirectos}
              helperText={errors?.vida_idFamDirectos?.message as string}
            />
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idOrientacion"
              control={control}
              data={vidaOrientacSexual}
              idLabel="orientac_sex_label"
              idSelect="orientac_sex_select"
              label="Orientación sexual"
              error={!!errors?.vida_idOrientacion}
              helperText={errors?.vida_idOrientacion?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idEmbarazo"
              control={control}
              data={vidaEmbarazo}
              idLabel="embarazo_label"
              idSelect="embarazo_select"
              label="Embarazo | Lactancia"
              error={!!errors?.vida_idEmbarazo}
              helperText={errors?.vida_idEmbarazo?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idHacimiento"
              control={control}
              data={vidaHacinamiento}
              idLabel="hacinamiento_label"
              idSelect="hacinamiento_select"
              label="Hacinamiento"
              error={!!errors?.vida_idHacimiento}
              helperText={errors?.vida_idHacimiento?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idCondMigratoria"
              control={control}
              data={vidaCondicMigrat}
              idLabel="cond_migrat_label"
              idSelect="cond_migrat_select"
              label="Condición Migratoria"
              error={!!errors?.vida_idCondMigratoria}
              helperText={errors?.vida_idCondMigratoria?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idCondLaboral"
              control={control}
              data={vidaCondicLaboral}
              idLabel="condic_laboral_label"
              idSelect="condic_laboral_select"
              label="Condición Laboral"
              error={!!errors?.vida_idCondLaboral}
              helperText={errors?.vida_idCondLaboral?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idNacionalidad"
              control={control}
              data={vidaNacionalidad}
              idLabel="nacionalidad_label"
              idSelect="nacionalidad_select"
              label="Nacionalidad"
              error={!!errors?.vida_idNacionalidad}
              helperText={errors?.vida_idNacionalidad?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idIdentGenero"
              control={control}
              data={vidaIdentGenero}
              idLabel="identidad_genero_label"
              idSelect="identidad_genero_select"
              label="Identidad de Género"
              error={!!errors?.vida_idIdentGenero}
              helperText={errors?.vida_idIdentGenero?.message as string}
            />
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idDependientes"
              control={control}
              data={vidaDependientes}
              idLabel="dependientes_label"
              idSelect="dependientes_select"
              label="Dependientes (menores de 5 años)"
              error={!!errors?.vida_idDependientes}
              helperText={errors?.vida_idDependientes?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idCondFisica"
              control={control}
              data={vidaCondicFisica}
              idLabel="condicion_fisica_label"
              idSelect="condicion_fisica_select"
              label="Condición Física"
              error={!!errors?.vida_idCondFisica}
              helperText={errors?.vida_idCondFisica?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idSobreviviente"
              control={control}
              data={vidaSobrevVBG}
              idLabel="sobreviviente_vbg_label"
              idSelect="sobreviviente_vbg_select"
              label="Sobreviviente de VBG"
              error={!!errors?.vida_idSobreviviente}
              helperText={errors?.vida_idSobreviviente?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idDocPosee"
              control={control}
              data={vidaDocumentPosee}
              idLabel="doc_posee_label"
              idSelect="doc_posee_select"
              label="Documento que posee"
              error={!!errors?.vida_idDocPosee}
              helperText={errors?.vida_idDocPosee?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idIngresoProm"
              control={control}
              data={vidaIngresoPromMen}
              idLabel="ingreso_prom_label"
              idSelect="ingreso_prom_select"
              label="Ingreso Promedio Mensual"
              error={!!errors?.vida_idIngresoProm}
              helperText={errors?.vida_idIngresoProm?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idTipoResidencia"
              control={control}
              data={vidaTipoResidencia}
              idLabel="tipo_residencia_label"
              idSelect="tipo_residencia_select"
              label="Tipo de Residencia"
              error={!!errors?.vida_idTipoResidencia}
              helperText={errors?.vida_idTipoResidencia?.message as string}
            />
          </Box>
          <Box marginBottom="20px">
            <SelectComponent
              name="vida_idHorasTrabajo"
              control={control}
              data={vidaHorasTrabajo}
              idLabel="horas_trabajo_label"
              idSelect="horas_trabajo_select"
              label="Horas de Trabajo Diarias"
              error={!!errors?.vida_idHorasTrabajo}
              helperText={errors?.vida_idHorasTrabajo?.message as string}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FormVida
