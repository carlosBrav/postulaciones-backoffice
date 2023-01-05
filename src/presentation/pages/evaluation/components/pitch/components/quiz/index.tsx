import React from 'react'
import { Box, Slider } from '@mui/material'
import TextCommon from '@presentation/components/text-common'
import './styles.scss'
import cloneDeep from 'lodash/cloneDeep'
import { ParticipantEvaluationSecInd } from '@domain/project/models/participant-evaluation-sec-ind'

type Props = {
  title: string
  value: number
  id: number
  changeResponse: (score: number, id: number) => void
}

function QuizComponent({
  title,
  value = 0,
  changeResponse = () => {},
  id = 0
}: Props) {
  const valuetext = (value: number) => `${value}`

  const handleChange = (event: Event, newValue: number | number[]) => {
    // const findData = data.find((val) => val.idIndicador === id)
    // console.log('find data ', findData)
    // const indexResponse = data.indexOf(findData as ParticipantEvaluationSecInd)
    // const cloneResponse = cloneDeep(data)
    // cloneResponse[indexResponse].respuesta = newValue as number
    // setData(cloneResponse)
    changeResponse(newValue as number,  id)
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
          key={`slider-${id}`}
          onChange={handleChange}
          value={value}
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
