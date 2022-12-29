import React from 'react'
import { Box, Grid } from '@mui/material'
import SelectComponent from '@presentation/components/select'
import InputTextComponent from '@presentation/components/input-text'
import { useContext } from 'react'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { SwitchComponent } from '@presentation/components/switch-component'

type Props = {
  control: any
  errors: any
}

function FormGeneral({ control, errors }: Props) {
  const { estadoProyecto } = useContext(ParameterManageContext)
  return (
    <Grid container spacing={2}>
      <Grid item container md={8} xs={12} spacing={2}>
        <Grid item md={4} xs={12}>
          <Box>
            <InputTextComponent
              label="Código"
              name="codigo"
              control={control}
              id="codigo"
              type="text"
              helperText={errors?.codigo?.message as string}
            />
          </Box>
        </Grid>
        <Grid item md={8} xs={12}>
          <Box>
            <InputTextComponent
              label="Nombre"
              name="nombre"
              control={control}
              id="nombre"
              type="text"
              helperText={errors?.nombre?.message as string}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <InputTextComponent
              label="Descripción"
              name="descripcion"
              control={control}
              id="descripcion"
              type="text"
              helperText={errors?.descripcion?.message as string}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid item container md={4} xs={12} spacing={2}>
        <Grid item xs={12}>
          <Box>
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
        <Grid item xs={12}>
          <Box>
            <SelectComponent
              name="idEstado"
              control={control}
              data={estadoProyecto}
              idLabel="estado_proyecto_label"
              idSelect="estado_proyecto_select"
              label="Estado"
              disabled
            />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <SwitchComponent
          label={'Habilitar landing'}
          control={control}
          name={'flagLanding'}
        />
      </Grid>
    </Grid>
  )
}

export { FormGeneral }
