import { TextField } from '@mui/material'
import React from 'react'

type Props = {
  onChange: (data: string) => void
  value: string
  label: string
}

function InputTextCustom({ onChange, value, label }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <TextField
      onChange={handleChange}
      value={value}
      fullWidth
      label={label}
      id="input-text-custom"
    />
  )
}

export { InputTextCustom }
