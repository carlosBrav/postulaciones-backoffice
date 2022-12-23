import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextCommon from '@presentation/components/text-common'
import { ParticipantRepository } from '@domain/participant'
import FormTab from '../form-tab'
import './styles.scss'
import Grid from '@mui/material/Grid'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import SelectComponent from '@presentation/components/select'
import InputTextComponent from '@presentation/components/input-text'
import CheckBoxComponent from '@presentation/components/checkbox'
import ButtonComponent from '@presentation/components/button'
import FormGeneral from '@presentation/pages/manage-participants/participants-new/components/form-general'
import FormSalud from '@presentation/pages/manage-participants/participants-new/components/form-salud'
import FormVida from '@presentation/pages/manage-participants/participants-new/components/form-vida'

type Props = {
  repository: ParticipantRepository
}

const titles_tap = [
  'INFORMACION GENERAL',
  'INFORMACION SALUD Y PROTECCION',
  'INFORMACION MEDIOS DE VIDA'
]

function FormParticipant({ repository }: Props) {
  const [tab, setTab] = useState<number>(0)
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors }
  } = useForm()
  return (
    <Box width="100%" marginTop="30px">
      <Box width="100%" display="flex" flexDirection="column">
        <Box width="100%" display="flex" flexDirection="row">
          {titles_tap.map((val, index) => (
            <FormTab
              key={index}
              text={val}
              isSelected={tab === index}
              onClick={() => setTab(index)}
            />
          ))}
        </Box>
        <form className="form-participants">
          <Box width="100%" display="flex" flexDirection="column">
            <Box
              width="100%"
              padding="20px 10px 10px 10px"
              style={{ border: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
              {tab === 0 && <FormGeneral control={control} errors={errors} />}
              {tab === 1 && <FormSalud control={control} errors={errors} />}
              {tab === 2 && <FormVida control={control} errors={errors} />}
            </Box>
            <Box width="100%" marginTop="30px">
              <Box maxWidth="150px">
                <ButtonComponent type="submit" title="Guardar" />
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default FormParticipant
