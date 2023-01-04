import React from 'react'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'
import FormTab from '@presentation/components/form-tab'
import './styles.scss'
import { ButtonComponent } from '@presentation/components/button'
import FormGeneral from '@presentation/pages/manage-participants/participants-new/components/form-general'
import FormSalud from '@presentation/pages/manage-participants/participants-new/components/form-salud'
import FormVida from '@presentation/pages/manage-participants/participants-new/components/form-vida'
import { ParameterRepository } from '@domain/parameter'
import { ParticipantRepository } from '@domain/participant'
import { useFormParticipant } from './hooks/use-form-participant'
import isEmpty from 'lodash/isEmpty'

type Props = {
  repository: ParticipantRepository
  parameter: ParameterRepository
  id?: string
}

const titles_tap = [
  { label: 'INFORMACION GENERAL', disabled: false },
  { label: 'INFORMACION SALUD Y PROTECCION', disabled: true },
  {
    label: 'INFORMACION MEDIOS DE VIDA',
    disabled: false
  }
]

function FormParticipant({ repository, parameter, id }: Props) {
  const {
    tab,
    setTab,
    handleSubmit,
    onSubmit,
    handleSetValueFecNac,
    handleSetValueFecVenc,
    handleDocumentValue,
    handleTypeDocument,
    handleFonoValue,
    control,
    errors,
    fecNacimiento,
    fecVencimiento,
    flagAccesoTecno,
    flagEmprendimiento,
    flagVentaInternet,
    numDoc,
    idTipDoc,
    fono
  } = useFormParticipant(repository, id as string)

  return (
    <Box width="100%" marginTop="30px">
      <Box width="100%" display="flex" flexDirection="column">
        <Box width="100%" display="flex" flexDirection="row">
          {titles_tap.map((val, index) => (
            <FormTab
              key={index}
              text={val.label}
              isSelected={tab === index}
              onClick={() => setTab(index)}
              disabled={val.disabled}
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
                  numDoc={numDoc}
                  handleDocumentValue={handleDocumentValue}
                  handleTypeDocument={handleTypeDocument}
                  control={control}
                  errors={errors}
                  idTipDoc={idTipDoc}
                  fono={fono}
                  handleFonoValue={handleFonoValue}
                />
              )}
              {tab === 1 && <FormSalud control={control} errors={errors} />}
              {tab === 2 && <FormVida control={control} errors={errors} />}
            </Box>
            <Box width="100%" marginTop="30px">
              <Box maxWidth="400px">
                <Box maxWidth="150px">
                  <ButtonComponent
                    variant="contained"
                    type="submit"
                    title="Guardar"
                  />
                </Box>
                <Box width="100%" marginTop="8px">
                  {!isEmpty(errors) && (
                    <FormHelperText error>
                      Hay datos requeridos que faltan completar
                    </FormHelperText>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default FormParticipant
