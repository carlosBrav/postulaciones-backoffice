import React from 'react'
import UploadIcon from 'presentation/assets/images/svg/upload_icon.svg'
import { cn } from '@presentation/libs/bem'

import './styles.scss'

type Props = {
  error: boolean
  isDragActive: boolean
  isRejected: boolean
  msjTypeArchive?: string
}

export default function FileUploadStatic({
  error,
  isDragActive,
  isRejected,
  msjTypeArchive = ''
}: Props) {
  const classes = cn('file-upload-static')
  return (
    <div className={classes({ error })}>
      <div className={classes('content')}>
        <img src={UploadIcon} alt="carga" />
        <p className={classes('title')}>
          {isDragActive ? (
            <span>Suelte su foto aquí</span>
          ) : (
            <>
              <span className={classes('link')}>Click para cargar</span> o
              arrastre y suelte su foto
            </>
          )}
        </p>
        <p className={classes('sub_title')}>{msjTypeArchive}</p>
        {isRejected && (
          <h5 className={classes('error')}>
            Foto rechazada, agregue uno nuevo
          </h5>
        )}
      </div>
    </div>
  )
}
