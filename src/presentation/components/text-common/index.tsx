import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

type Props = {
  text: string
  fontSize: string
  type: 'primary' | 'secondary' | 'normal' | string
  className?: string
}

const TextCommon = ({
  text = '',
  fontSize = '',
  type = 'primary',
  className = ''
}: Props) => {
  const handleColor = () => {
    switch (type) {
      case 'primary':
        return '#1A5EAF'
      case 'secondary':
        return '#FFFFFF'
      default:
        return '#444444'
    }
  }

  return (
    <Typography
      variant="h6"
      component="h6"
      fontSize={fontSize}
      color={handleColor()}
      fontWeight="bold"
      className={className}
    >
      {text}
    </Typography>
  )
}

export default TextCommon
