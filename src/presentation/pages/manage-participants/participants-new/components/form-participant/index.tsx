import React from 'react'
import Box from '@mui/material/Box'
import FormTab from '@presentation/components/form-tab'
import './styles.scss'
import ButtonComponent from '@presentation/components/button'
import FormGeneral from '@presentation/pages/manage-participants/participants-new/components/form-general'
import FormSalud from '@presentation/pages/manage-participants/participants-new/components/form-salud'
import FormVida from '@presentation/pages/manage-participants/participants-new/components/form-vida'
import { ParameterRepository } from '@domain/parameter'
import { ParticipantRepository } from '@domain/participant'
import { useFormParticipant } from './hooks/use-form-participant'

type Props = {
  repository: ParticipantRepository
  parameter: ParameterRepository
  id?: string
}

const titles_tap = [
  'INFORMACION GENERAL',
  'INFORMACION SALUD Y PROTECCION',
  'INFORMACION MEDIOS DE VIDA'
]

function FormParticipant({ repository, parameter, id }: Props) {
  const {
    tab,
    setTab,
    handleSubmit,
    onSubmit,
    handleSetValueFecNac,
    handleSetValueFecVenc,
    control,
    errors,
    fecNacimiento,
    fecVencimiento,
    flagAccesoTecno,
    flagEmprendimiento,
    flagVentaInternet
  } = useFormParticipant(repository, id as string)
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
        <form className="form-participants" onSubmit={handleSubmit(onSubmit)}>
          <Box width="100%" display="flex" flexDirection="column">
            <Box
              width="100%"
              padding="20px 10px 10px 10px"
              style={{ border: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
              {tab === 0 && (
                <FormGeneral
                  defaultFecNac={fecNacimiento}
                  defaultFecVenc={fecVencimiento}
                  handleFecNac={handleSetValueFecNac}
                  handleFecVenc={handleSetValueFecVenc}
                  flagAccesoTecno={flagAccesoTecno}
                  flagEmprendimiento={flagEmprendimiento}
                  flagVentaInternet={flagVentaInternet}
                  control={control}
                  errors={errors}
                />
              )}
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
