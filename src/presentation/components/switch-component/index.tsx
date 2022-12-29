import * as React from 'react'
import Switch from '@mui/material/Switch'
import { Controller } from 'react-hook-form'
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel
} from '@mui/material'

const labelInfo = { inputProps: { 'aria-label': 'Switch demo' } }

type Props = {
  value?: boolean
  label: string
  control?: any
  name?: string
  error?: boolean
  helperText?: string
}

function SwitchComponent({
  value,
  label,
  control,
  name,
  error,
  helperText
}: Props) {
  return (
    <Controller
      name={`${name}` as `${string}`}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth error={error}>
          <FormControlLabel
            control={<Switch checked={value} {...field} />}
            label={label}
          />
          <FormHelperText style={{ marginTop: 1 }}>{helperText}</FormHelperText>
        </FormControl>
      )}
    />
  )
}

export { SwitchComponent }
