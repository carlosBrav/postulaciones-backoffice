import React, { useContext } from 'react'
import SelectComponent from '@presentation/components/select'
import InputTextComponent from '@presentation/components/input-text'
import InputNumberComponent from '@presentation/components/input-text/number'
import CheckBoxComponent from '@presentation/components/checkbox'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import DatePickerComponent from '@presentation/components/date-picker'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { useCriteriaGeneral } from './hooks/use-criteria-general'

type Props = {
  control: any
  errors: any
  defaultFecNac?: string
  defaultFecVenc?: string
  handleFecNac: (data: string) => void
  handleFecVenc: (data: string) => void
  flagAccesoTecno?: boolean
  flagEmprendimiento?: boolean
  flagVentaInternet?: boolean
}

function FormGeneral({
  control,
  errors,
  defaultFecNac = '',
  defaultFecVenc = '',
  handleFecNac = () => {},
  handleFecVenc = () => {},
  flagAccesoTecno = false,
  flagEmprendimiento = false,
  flagVentaInternet = false
}: Props) {
  const { type_document } = useCriteriaGeneral()

  return (
    <Grid container spacing={2}>
      <Grid item container spacing={2}>
        <Grid item md={4} xs={12}>
          <SelectComponent
            name="idTipDoc"
            control={control}
            data={type_document}
            idLabel="type_document_label"
            idSelect="type_document_select"
            label="Tipo de documento*"
            error={!!errors?.idTipDoc}
            helperText={errors?.idTipDoc?.message as string}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <InputTextComponent
            label="Número de documento*"
            name="numDoc"
            control={control}
            id="numDoc"
            type="text"
            helperText={errors?.numDoc?.message as string}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <InputNumberComponent
            label="Años de emprendimiento"
            name="aniosEmprendimiento"
            control={control}
            id="aniosEmprendimiento"
            helperText={errors?.aniosEmprendimiento?.message as string}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item md={4} xs={12}>
          <InputTextComponent
            label="Nombres*"
            name="nombre"
            control={control}
            id="name"
            type="text"
            helperText={errors?.nombre?.message as string}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <InputTextComponent
            label="Apellidos*"
            name="apellido"
            control={control}
            id="apellido"
            type="text"
            helperText={errors?.apellido?.message as string}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <InputTextComponent
            label="Distrito*"
            name="distrito"
            control={control}
            id="distrito"
            type="text"
            helperText={errors?.distrito?.message as string}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item md={4} xs={12}>
          <InputTextComponent
            label="Correo*"
            name="email"
            control={control}
            id="email"
            type="text"
            helperText={errors?.email?.message as string}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <InputTextComponent
            label="Teléfono*"
            name="fono"
            control={control}
            id="fono"
            type="text"
            helperText={errors?.fono?.message as string}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <InputNumberComponent
            label="Edad*"
            name="edad"
            control={control}
            id="edad"
            helperText={errors?.edad?.message as string}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item md={4} xs={12}>
          <InputTextComponent
            label="Provincia*"
            name="provincia"
            control={control}
            id="provincia"
            type="text"
            helperText={errors?.provincia?.message as string}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <InputTextComponent
            label="Región*"
            name="region"
            control={control}
            id="region"
            type="text"
            helperText={errors?.region?.message as string}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item md={4} xs={12}>
          <DatePickerComponent
            onHandleDate={handleFecNac}
            title="Fecha de Nacimiento*"
            value={defaultFecNac}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <DatePickerComponent
            onHandleDate={handleFecVenc}
            title="Fecha de Vencimiento*"
            value={defaultFecVenc}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        <Grid item md={4} xs={12}>
          <Box marginBottom="10px">
            <CheckBoxComponent
              control={control}
              defaultValue={flagAccesoTecno}
              label="Acceso a Tecnología"
              name="flagAccesoTecno"
            />
          </Box>
          <Box marginBottom="10px">
            <CheckBoxComponent
              control={control}
              defaultValue={flagEmprendimiento}
              label="Emprendimiento"
              name="flagEmprendimiento"
            />
          </Box>
          <Box marginBottom="10px">
            <CheckBoxComponent
              control={control}
              defaultValue={flagVentaInternet}
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
