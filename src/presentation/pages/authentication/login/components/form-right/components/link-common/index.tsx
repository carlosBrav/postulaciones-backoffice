import React from 'react'
import { Link } from '@mui/material';
import './styles.scss'

type Props = {
  text: string
  onClick: () => void
}

function LinkCommon({ text = '', onClick=()=>{} }: Props) {
  return (
    <Link
      component="button"
      variant="body2"
      className="link-common"
      onClick={onClick}
    >
      {text}
    </Link>
  )
}

export default LinkCommon
