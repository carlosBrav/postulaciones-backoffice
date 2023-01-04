import React from 'react'
import { FormControl, FormControlLabel, Switch } from '@mui/material'

type Props = {
  onChange: (status: boolean) => void
  value: boolean
  label: string
}

function SwitchComponent({ onChange, value, label }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <FormControl fullWidth>
      <FormControlLabel
        control={
          <Switch onChange={handleChange} checked={value} color="secondary" />
        }
        label={label}
      />
    </FormControl>
  )
}

export { SwitchComponent }
