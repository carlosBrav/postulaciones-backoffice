import { Box, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import React, { useEffect } from 'react'
import { parse, format } from 'date-fns'
import { es } from 'date-fns/locale'
import './styles.scss'

type Props = {
  value?: string
  title: string
  onHandleDate: (initDate: string) => void
}
export default function DatePickerComponent({
  onHandleDate = () => {},
  value = '',
  title = ''
}: Props) {
  const [initValue, setInitValue] = React.useState<Date | null>(null)

  const handleDatePicker = (date: Date) => {
    setInitValue(date)
    onHandleDate(format(date, 'dd/MM/yyyy'))
  }

  useEffect(() => {
    if (value !== '') {
      console.log('value ', value)
      console.log(parse(value, 'dd/MM/yyyy', new Date()))
      setInitValue(parse(value, 'dd/MM/yyyy', new Date()))
    }
  }, [value])

  return (
    <LocalizationProvider adapterLocale={es} dateAdapter={AdapterDateFns}>
      <Box width="100%">
        <DatePicker
          className="data-picker"
          key={'init'}
          label={title}
          inputFormat="dd/MM/yyyy"
          value={initValue as Date}
          onChange={(newValue) => {
            handleDatePicker(newValue as Date)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
    </LocalizationProvider>
  )
}
