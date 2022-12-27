import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useValidationParticipant } from '@presentation/pages/manage-participants/participants-new/hooks/use-validation-participant'
import {
  ParticipantForm,
  ParticipantRepository,
  ParticipantCreateRequest,
  SaludProteccionRequest,
  MediosVidaRequest,
  ParticipantUpdateRequest
} from '@domain/participant'
import { toast } from 'react-hot-toast'
import { useCreateParticipants } from '@main/adapters/participant/use-create-participants'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'
import { useNavigate } from 'react-router-dom'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { useEditParticipant } from '@main/adapters/participant/use-edit-participant'

function useFormParticipant(repository: ParticipantRepository, id: string) {
  let toastId: string
  const {
    isLoading: isLoadingEdit,
    isSuccess: isSuccessEdit,
    mutate: mutateEdit
  } = useEditParticipant(repository)
  const { getAuthToken } = useAuthToken()
  const authToken = getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH)
  const navigate = useNavigate()
  const {
    isLoading: isLoadingCreate,
    isSuccess: isSuccessCreate,
    mutate
  } = useCreateParticipants(repository)
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

  const { fecNacimiento, fecVencimiento } = watch()

  const { listParticipants } = useContext(ParameterManageContext)

  const handleSetValueFecNac = (data: string) => {
    setValue('fecNacimiento', data)
  }

  const handleSetValueFecVenc = (data: string) => {
    setValue('fecVencimiento', data)
  }

  const onSubmit = (data: ParticipantForm) => {
    if (id) {
      const updateObject = new ParticipantUpdateRequest()
      updateObject.idTipDoc = data.idTipDoc
      updateObject.nombre = data.nombre
      updateObject.apellido = data.apellido
      updateObject.numDoc = data.numDoc
      updateObject.email = data.email
      updateObject.fono = data.fono
      updateObject.distrito = data.distrito
      updateObject.provincia = data.provincia
      updateObject.region = data.region
      updateObject.edad = +data.edad
      updateObject.flagEmprendimiento = data.flagEmprendimiento
      updateObject.flagAccesoTecno = data.flagAccesoTecno
      updateObject.fecNacimiento = data.fecNacimiento
      updateObject.fecVencimiento = data.fecVencimiento
      updateObject.aniosEmprendimiento = +data.aniosEmprendimiento
      updateObject.flagVentaInternet = data.flagVentaInternet
      updateObject.idUsuCrea = authToken?.idUsuario as number
      const saludProtecc = new SaludProteccionRequest()
      saludProtecc.idTipoCalculo = '00001'
      saludProtecc.idSexo = data.salud_idSexo
      saludProtecc.idOrientacion = data.salud_idOrientacion
      saludProtecc.idDependientes = data.salud_idDependientes
      saludProtecc.idOtrosDependientes = data.salud_idOtrosDependientes
      saludProtecc.idEmbarazo = data.salud_idEmbarazo
      saludProtecc.idCondFisica = data.salud_idCondFisica
      saludProtecc.idCondAlojamiento = data.salud_idCondAlojamiento
      saludProtecc.idHacimiento = data.salud_idHacimiento
      saludProtecc.idSobreviviente = data.salud_idSobreviviente
      saludProtecc.idRedSoporte = data.salud_idRedSoporte
      saludProtecc.idCondMigratoria = data.salud_idCondMigratoria
      saludProtecc.idNivelEducativo = data.salud_idNivelEducativo
      saludProtecc.idCondLaboral = data.salud_idCondLaboral
      saludProtecc.idSeguroSalud = data.salud_idSeguroSalud
      saludProtecc.idIngresoProm = data.salud_idIngresoProm
      saludProtecc.idEdad = data.salud_idEdad
      saludProtecc.idNacionalidad = data.salud_idNacionalidad
      saludProtecc.idIdentGenero = data.salud_idIdentGenero

      const mediosVida = new MediosVidaRequest()
      mediosVida.idTipoCalculo = '00002'
      mediosVida.idSexo = data.vida_idSexo
      mediosVida.idOrientacion = data.vida_idOrientacion
      mediosVida.idDependientes = data.vida_idDependientes
      mediosVida.idOtrosDependientes = data.vida_idOtrosDependientes
      mediosVida.idEmbarazo = data.vida_idEmbarazo
      mediosVida.idCondFisica = data.vida_idCondFisica
      mediosVida.idCondAlojamiento = data.vida_idCondAlojamiento
      mediosVida.idHacimiento = data.vida_idHacimiento
      mediosVida.idSobreviviente = data.vida_idSobreviviente
      mediosVida.idRedSoporte = data.vida_idRedSoporte
      mediosVida.idCondMigratoria = data.vida_idCondMigratoria
      mediosVida.idDocPosee = data.vida_idDocPosee
      mediosVida.idNivelEducativo = data.vida_idNivelEducativo
      mediosVida.idCondLaboral = data.vida_idCondLaboral
      mediosVida.idIngresoProm = data.vida_idIngresoProm
      mediosVida.idEdad = data.vida_idEdad
      mediosVida.idNacionalidad = data.vida_idNacionalidad
      mediosVida.idTipoResidencia = data.vida_idTipoResidencia
      mediosVida.idFamDirectos = data.vida_idFamDirectos
      mediosVida.idIdentGenero = data.vida_idIdentGenero
      mediosVida.idHorasTrabajo = data.vida_idHorasTrabajo

      updateObject.mediosVida = mediosVida
      updateObject.saludProteccion = saludProtecc
      mutateEdit(updateObject)
    } else {
      const createObject = new ParticipantCreateRequest()
      createObject.idTipDoc = data.idTipDoc
      createObject.nombre = data.nombre
      createObject.apellido = data.apellido
      createObject.numDoc = data.numDoc
      createObject.email = data.email
      createObject.fono = data.fono
      createObject.distrito = data.distrito
      createObject.provincia = data.provincia
      createObject.region = data.region
      createObject.edad = +data.edad
      createObject.flagEmprendimiento = data.flagEmprendimiento
      createObject.flagAccesoTecno = data.flagAccesoTecno
      createObject.fecNacimiento = data.fecNacimiento
      createObject.fecVencimiento = data.fecVencimiento
      createObject.aniosEmprendimiento = +data.aniosEmprendimiento
      createObject.flagVentaInternet = data.flagVentaInternet
      createObject.idUsuCrea = authToken?.idUsuario as number
      const saludProtecc = new SaludProteccionRequest()
      saludProtecc.idTipoCalculo = '00001'
      saludProtecc.idSexo = data.salud_idSexo
      saludProtecc.idOrientacion = data.salud_idOrientacion
      saludProtecc.idDependientes = data.salud_idDependientes
      saludProtecc.idOtrosDependientes = data.salud_idOtrosDependientes
      saludProtecc.idEmbarazo = data.salud_idEmbarazo
      saludProtecc.idCondFisica = data.salud_idCondFisica
      saludProtecc.idCondAlojamiento = data.salud_idCondAlojamiento
      saludProtecc.idHacimiento = data.salud_idHacimiento
      saludProtecc.idSobreviviente = data.salud_idSobreviviente
      saludProtecc.idRedSoporte = data.salud_idRedSoporte
      saludProtecc.idCondMigratoria = data.salud_idCondMigratoria
      saludProtecc.idNivelEducativo = data.salud_idNivelEducativo
      saludProtecc.idCondLaboral = data.salud_idCondLaboral
      saludProtecc.idSeguroSalud = data.salud_idSeguroSalud
      saludProtecc.idIngresoProm = data.salud_idIngresoProm
      saludProtecc.idEdad = data.salud_idEdad
      saludProtecc.idNacionalidad = data.salud_idNacionalidad
      saludProtecc.idIdentGenero = data.salud_idIdentGenero

      const mediosVida = new MediosVidaRequest()
      mediosVida.idTipoCalculo = '00002'
      mediosVida.idSexo = data.vida_idSexo
      mediosVida.idOrientacion = data.vida_idOrientacion
      mediosVida.idDependientes = data.vida_idDependientes
      mediosVida.idOtrosDependientes = data.vida_idOtrosDependientes
      mediosVida.idEmbarazo = data.vida_idEmbarazo
      mediosVida.idCondFisica = data.vida_idCondFisica
      mediosVida.idCondAlojamiento = data.vida_idCondAlojamiento
      mediosVida.idHacimiento = data.vida_idHacimiento
      mediosVida.idSobreviviente = data.vida_idSobreviviente
      mediosVida.idRedSoporte = data.vida_idRedSoporte
      mediosVida.idCondMigratoria = data.vida_idCondMigratoria
      mediosVida.idDocPosee = data.vida_idDocPosee
      mediosVida.idNivelEducativo = data.vida_idNivelEducativo
      mediosVida.idCondLaboral = data.vida_idCondLaboral
      mediosVida.idIngresoProm = data.vida_idIngresoProm
      mediosVida.idEdad = data.vida_idEdad
      mediosVida.idNacionalidad = data.vida_idNacionalidad
      mediosVida.idTipoResidencia = data.vida_idTipoResidencia
      mediosVida.idFamDirectos = data.vida_idFamDirectos
      mediosVida.idIdentGenero = data.vida_idIdentGenero
      mediosVida.idHorasTrabajo = data.vida_idHorasTrabajo

      createObject.mediosVida = mediosVida
      createObject.saludProteccion = saludProtecc
      mutate(createObject)
    }
  }

  const findParticipant = () => {
    return listParticipants.find((val) => `${val.idParticipante}` === id)
  }

  const editValuesGeneral = () => {
    const participant = findParticipant()
    setValue('idUsuCrea', authToken?.idUsuario as number)
    setValue('idParticipante', +id)
    setValue('idTipDoc', participant?.idTipDoc as string)
    setValue('nombre', participant?.nombre as string)
    setValue('apellido', participant?.apellido as string)
    setValue('numDoc', participant?.numDoc as string)
    setValue('email', participant?.email as string)
    setValue('fono', participant?.fono as string)
    setValue('distrito', participant?.distrito as string)
    setValue('provincia', participant?.provincia as string)
    setValue('region', participant?.region as string)
    setValue('edad', `${participant?.edad}`)
    setValue('flagEmprendimiento', participant?.flagEmprendimiento as boolean)
    setValue('flagAccesoTecno', participant?.flagAccesoTecno as boolean)
    setValue('fecNacimiento', participant?.fecNacimiento as string)
    setValue('fecVencimiento', participant?.fecVencimiento as string)
    setValue('aniosEmprendimiento', `${participant?.aniosEmprendimiento}`)
    setValue('flagVentaInternet', participant?.flagVentaInternet as boolean)
  }

  const editValuesSalud = () => {
    const participant = findParticipant()
    setValue('salud_idSexo', participant?.saludProteccion.idSexo as string)
    setValue(
      'salud_idOtrosDependientes',
      participant?.saludProteccion.idOtrosDependientes as string
    )
    setValue(
      'salud_idCondAlojamiento',
      participant?.saludProteccion.idCondAlojamiento as string
    )
    setValue(
      'salud_idRedSoporte',
      participant?.saludProteccion.idRedSoporte as string
    )
    setValue(
      'salud_idNivelEducativo',
      participant?.saludProteccion.idNivelEducativo as string
    )
    setValue(
      'salud_idIngresoProm',
      participant?.saludProteccion.idIngresoProm as string
    )
    setValue(
      'salud_idIdentGenero',
      participant?.saludProteccion.idIdentGenero as string
    )
    setValue(
      'salud_idOrientacion',
      participant?.saludProteccion.idOrientacion as string
    )
    setValue(
      'salud_idEmbarazo',
      participant?.saludProteccion.idEmbarazo as string
    )
    setValue(
      'salud_idHacimiento',
      participant?.saludProteccion.idHacimiento as string
    )
    setValue(
      'salud_idCondMigratoria',
      participant?.saludProteccion.idCondMigratoria as string
    )
    setValue(
      'salud_idCondLaboral',
      participant?.saludProteccion.idCondLaboral as string
    )
    setValue('salud_idEdad', participant?.saludProteccion.idEdad as string)
    setValue(
      'salud_idDependientes',
      participant?.saludProteccion.idDependientes as string
    )
    setValue(
      'salud_idCondFisica',
      participant?.saludProteccion.idCondFisica as string
    )
    setValue(
      'salud_idSobreviviente',
      participant?.saludProteccion.idSobreviviente as string
    )
    setValue(
      'salud_idDocPosee',
      participant?.saludProteccion.idDocPosee as string
    )
    setValue(
      'salud_idSeguroSalud',
      participant?.saludProteccion.idSeguroSalud as string
    )
    setValue(
      'salud_idNacionalidad',
      participant?.saludProteccion.idNacionalidad as string
    )
  }

  const editValuesVida = () => {
    const participant = findParticipant()
    setValue('vida_idSexo', participant?.mediosVida.idSexo as string)
    setValue(
      'vida_idOtrosDependientes',
      participant?.mediosVida.idOtrosDependientes as string
    )
    setValue(
      'vida_idCondAlojamiento',
      participant?.mediosVida.idCondAlojamiento as string
    )
    setValue(
      'vida_idRedSoporte',
      participant?.mediosVida.idRedSoporte as string
    )
    setValue(
      'vida_idNivelEducativo',
      participant?.mediosVida.idNivelEducativo as string
    )
    setValue('vida_idEdad', participant?.mediosVida.idEdad as string)
    setValue(
      'vida_idFamDirectos',
      participant?.mediosVida.idFamDirectos as string
    )
    setValue(
      'vida_idOrientacion',
      participant?.mediosVida.idOrientacion as string
    )
    setValue('vida_idEmbarazo', participant?.mediosVida.idEmbarazo as string)
    setValue(
      'vida_idHacimiento',
      participant?.mediosVida.idHacimiento as string
    )
    setValue(
      'vida_idCondMigratoria',
      participant?.mediosVida.idCondMigratoria as string
    )
    setValue(
      'vida_idCondLaboral',
      participant?.mediosVida.idCondLaboral as string
    )
    setValue(
      'vida_idNacionalidad',
      participant?.mediosVida.idNacionalidad as string
    )
    setValue(
      'vida_idIdentGenero',
      participant?.mediosVida.idIdentGenero as string
    )
    setValue(
      'vida_idDependientes',
      participant?.mediosVida.idDependientes as string
    )
    setValue(
      'vida_idCondFisica',
      participant?.mediosVida.idCondFisica as string
    )
    setValue(
      'vida_idSobreviviente',
      participant?.mediosVida.idSobreviviente as string
    )
    setValue('vida_idDocPosee', participant?.mediosVida.idDocPosee as string)
    setValue(
      'vida_idIngresoProm',
      participant?.mediosVida.idIngresoProm as string
    )
    setValue(
      'vida_idTipoResidencia',
      participant?.mediosVida.idTipoResidencia as string
    )
    setValue(
      'vida_idHorasTrabajo',
      participant?.mediosVida.idHorasTrabajo as string
    )
  }

  useEffect(() => {
    if (id) {
      editValuesGeneral()
      editValuesSalud()
      editValuesVida()
    }
  }, [id])

  useEffect(() => {
    if (isLoadingEdit) {
      toastId = toast.loading('Actualizando participante...')
    }
  }, [isLoadingEdit])

  useEffect(() => {
    if (isSuccessEdit) {
      toast.dismiss(toastId)
      toast.success('Participante actualizado')
      navigate('/dashboard/manage-participants')
    }
  }, [isSuccessEdit])

  useEffect(() => {
    if (isLoadingCreate) {
      toastId = toast.loading('Creando participante...')
    }
  }, [isLoadingCreate])

  useEffect(() => {
    if (isSuccessCreate) {
      toast.dismiss(toastId)
      toast.success('Participante creado')
      navigate('/dashboard/manage-participants')
    }
  }, [isSuccessCreate])

  return {
    tab,
    setTab,
    handleSubmit,
    control,
    watch,
    errors,
    fecNacimiento,
    fecVencimiento,
    handleSetValueFecVenc,
    handleSetValueFecNac,
    onSubmit,
    editValuesGeneral,
    editValuesVida,
    editValuesSalud
  }
}

export { useFormParticipant }
