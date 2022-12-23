import React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Controller } from 'react-hook-form'

type Props = {
  name: string
  control: any
  label: string
}

function CheckBoxGroup({ name, control, label }: Props) {
  return (
    <Controller
      name={`${name}` as `${string}`}
      control={control}
      render={({ field }) => (
        <FormControlLabel control={<Checkbox {...field} />} label={label} />
      )}
    />
    // <FormGroup>
    //   <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    //   <FormControlLabel control={<Checkbox />} label="Disabled" />
    // </FormGroup>
  )
}

export default CheckBoxGroup
