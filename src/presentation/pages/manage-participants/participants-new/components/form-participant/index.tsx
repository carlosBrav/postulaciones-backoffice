import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box'
import FormTab from '../form-tab'
import './styles.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import ButtonComponent from '@presentation/components/button'
import FormGeneral from '@presentation/pages/manage-participants/participants-new/components/form-general'
import FormSalud from '@presentation/pages/manage-participants/participants-new/components/form-salud'
import FormVida from '@presentation/pages/manage-participants/participants-new/components/form-vida'
import { useValidationParticipant } from '@presentation/pages/manage-participants/participants-new/hooks/use-validation-participant'
import { ParticipantForm, ParticipantRepository } from '@domain/participant'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { ParameterRepository } from '@domain/parameter'

type Props = {
  repository: ParticipantRepository
  parameter: ParameterRepository
}

const titles_tap = [
  'INFORMACION GENERAL',
  'INFORMACION SALUD Y PROTECCION',
  'INFORMACION MEDIOS DE VIDA'
]

function FormParticipant({ repository, parameter }: Props) {
  const [tab, setTab] = useState<number>(0)
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(useValidationParticipant),
    defaultValues: new ParticipantForm()
  })

  const handleSetValueFecNac = (data: string) => {
    setValue('fecNacimiento', data)
  }

  const handleSetValueFecVenc = (data: string) => {
    setValue('fecVencimiento', data)
  }

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
              {tab === 0 && (
                <FormGeneral
                  defaultFecNac=""
                  defaultFecVenc=""
                  handleFecNac={handleSetValueFecNac}
                  handleFecVenc={handleSetValueFecVenc}
                  control={control}
                  errors={errors}
                  parameter={parameter}
                />
              )}
              {tab === 1 && (
                <FormSalud
                  parameter={parameter}
                  control={control}
                  errors={errors}
                />
              )}
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
