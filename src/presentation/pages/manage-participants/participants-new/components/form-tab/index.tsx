import React from 'react'
import TextCommon from '@presentation/components/text-common'
import './styles.scss'

type Props = {
  isSelected?: boolean
  text: string
  onClick: () => void
}

function FormTab({ isSelected = false, text = '', onClick }: Props) {
  return (
    <div
      className={`form-tab ${isSelected ? 'form-tab__selected' : ''}`}
      onClick={onClick}
    >
      <TextCommon
        text={text}
        className="form-tab__text"
        fontSize="13px"
        type={`${isSelected ? 'secondary' : 'normal'}`}
      />
    </div>
  )
}

export default FormTab
