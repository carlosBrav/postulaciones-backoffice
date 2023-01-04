import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'
import React from 'react'

type Props = {
  idLabel: string
  idSelect: string
  data: any
  multiple?: boolean
  required?: boolean
  error?: boolean
  helperText?: string
  placeholder?: string
  label?: string
  disabled?: boolean
  value: string
  onChange: (data: string) => void
}
export default function SelectComponent({
  idLabel = '',
  idSelect = '',
  data = [],
  multiple = false,
  error = false,
  helperText = '',
  placeholder = '',
  label = '',
  disabled = false,
  value = '',
  onChange = () => {}
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string)
  }

  return (
    <FormControl fullWidth error={error} sx={{ height: '56px' }}>
      <InputLabel id={idLabel}>{label}</InputLabel>
      <Select
        disabled={disabled}
        label={label}
        id={idSelect}
        multiple={multiple}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      >
        {data.map((val: any) => (
          <MenuItem value={val.value} key={`${val.value}-${val.label}`}>
            {val.label}
          </MenuItem>
        ))}
      </Select>

      <FormHelperText style={{ marginTop: 1 }}>{helperText}</FormHelperText>
    </FormControl>
  )
}
