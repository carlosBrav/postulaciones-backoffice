import React from 'react'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

type Props = {
  id: string
  name: string
  control: any
  helperText?: string
  placeholder?: string
  label?: string
}

export default function InputNumberComponent({
  id = '',
  name = ``,
  control = {},
  helperText = '',
  placeholder = '',
  label = ''
}: Props) {
  return (
    <Controller
      name={`${name}` as `${string}`}
      control={control}
      render={({ field }) => (
        <TextField
          label={label}
          placeholder={placeholder}
          id={id}
          fullWidth
          style={{ borderRadius: 8 }}
          {...field}
          error={!!helperText}
          helperText={helperText}
          type={'number'}
          onInput={(e: any) => {
            e.target.value =
              e.target.value !== ''
                ? Math.max(0, parseInt(e.target.value)).toString().slice(0, 2)
                : ''
          }}
        />
      )}
    />
  )
}
