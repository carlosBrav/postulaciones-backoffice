import React from 'react'
import { Box, Slider } from '@mui/material'
import TextCommon from '@presentation/components/text-common'
import './styles.scss'

type Props = {
  title: string
  value: number
}

function QuizComponent({ title, value = 0 }: Props) {
  const valuetext = (value: number) => `${value}`
  //const { response, setResponse } = useContext(PostulacionesContext)

  const handleChange = (event: Event, newValue: number | number[]) => {
    // const selectResponse = response.find((val) => val.id === `${id}`)
    // const indexResponse = response.indexOf(selectResponse as ResponseForm)
    // const cloneResponse = cloneDeep(response)
    // cloneResponse[indexResponse].value = `${newValue}`
    // setResponse(cloneResponse)
  }

  return (
    <div className="quiz">
      <div className="quiz__text">
        <Box marginBottom="20px">
          <TextCommon fontSize="15px" text={`${title}`} type="dark" />
        </Box>
      </div>
      <Box width="200px">
        <Slider
          //onChange={handleChange}
          defaultValue={value}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={4}
          color="secondary"
          sx={{ height: 10 }}
        />
      </Box>
    </div>
  )
}

export { QuizComponent }
