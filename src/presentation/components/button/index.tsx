import { Button, ButtonProps, styled } from '@mui/material'
import React from 'react'
import './styles.scss'

type Props = {
  title: string
  type: 'button' | 'submit'
  variant: 'contained' | 'outlined' | 'text'
  disabled?: boolean
  onClick?: () => void
}

function ButtonComponent({
  title,
  type,
  disabled = false,
  variant,
  onClick
}: Props) {
  return type === 'submit' ? (
    <Button
      disabled={disabled}
      type={type}
      fullWidth
      variant={variant}
      className={`${
        variant === 'contained' ? 'button-common--primary' : 'button-common'
      } ${disabled ? ' button-common--disabled' : ''}`}
    >
      {title}
    </Button>
  ) : (
    <Button
      disabled={disabled}
      type={type}
      fullWidth
      variant={variant}
      onClick={onClick}
      className={`${
        variant === 'contained' ? 'button-common--primary' : 'button-common'
      }`}
    >
      {title}
    </Button>
  )
}

export { ButtonComponent }
