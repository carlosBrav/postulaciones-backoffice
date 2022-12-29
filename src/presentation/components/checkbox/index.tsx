import React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Controller } from 'react-hook-form'

type Props = {
  name: string
  control: any
  label: string
  defaultValue: boolean
}

function CheckBoxGroup({ name, control, label, defaultValue }: Props) {
  return (
    <Controller
      name={`${name}` as `${string}`}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} checked={defaultValue} />}
          label={label}
        />
      )}
    />
  )
}

export default CheckBoxGroup
