import React, { HTMLProps, useEffect, useState } from 'react'
import { ParameterManageContext } from './parameter-context'
import { ParameterRepository } from '@domain/parameter'
import { Profile, ProfileRepository } from '@domain/profiles'
import useParameter from '@main/adapters/parameter/use-parameter-type-document'
import { useParameterStatus } from '@main/adapters/parameter/use-parameter-status'
import useProfile from '@main/adapters/profile/use-profile'
import { Selector } from '@domain/common/model/selector'
import { Toaster } from 'react-hot-toast'
import { User } from '@domain/user'
import { ProjectResponse } from '@domain/project'
import { ParticipantRepository, ParticipantResponse } from '@domain/participant'
import { useSaludData } from '@presentation/pages/hooks/use-salud-data'
import { useVidaData } from '@presentation/pages/hooks/use-vida-data'
import useParticipants from '@main/adapters/participant/use-participants'
import { useResultParticipant } from '@main/adapters/parameter/use-result-particp-project'

type Props = {
  parameter: ParameterRepository
  profile: ProfileRepository
  participant: ParticipantRepository
} & HTMLProps<HTMLDivElement>

function ParameterProvider({
  children,
  parameter,
  profile,
  participant
}: Props) {
  const [typeDocument, setTypeDocument] = useState<Selector[]>([])
  const [typeProfiles, setTypeProfiles] = useState<Selector[]>([])
  const [listUsers, setListUsers] = useState<User[]>([])
  const [listProfiles, setListProfiles] = useState<Profile[]>([])
  const [listProjects, setListProjects] = useState<ProjectResponse[]>([])
  const [listParticipants, setListParticipants] = useState<
    ParticipantResponse[]
  >([])
  const [estadoProyecto, setEstadoProyecto] = useState<Selector[]>([])
  const [listStatusParticipant, setListStatusParticipant] = useState<
    Selector[]
  >([])

  const { data: dataResultParticipant, isSuccess: isSuccessDataResultPart } =
    useResultParticipant(parameter)

  const {
    mutate: mutateParticipants,
    isLoading: isLoadingParticipants,
    data: participants,
    isSuccess: isSuccessParticipants
  } = useParticipants(participant)

  useEffect(()=>{
    mutateParticipants()
  },[])

  useEffect(()  =>  {
    if  (isSuccessParticipants)  {
      setListParticipants(participants as ParticipantResponse[])
    }
  },  [isSuccessParticipants])

  const {
    isLoadingSalud,
    saludEdad,
    saludSexo,
    saludOtrosDep,
    saludCondicAloj,
    saludRedSoportePeru,
    saludNivelEduc,
    saludIngresoPromMen,
    saludIdentGenero,
    saludOrientacSexual,
    saludEmbarazo,
    saludHacinamiento,
    saludCondicMigrat,
    saludCondicLaboral,
    saludDependientes,
    saludCondicFisica,
    saludSobrevVBG,
    saludDocumentPosee,
    saludSeguroSalud,
    saludNacionalidad
  } = useSaludData(parameter)

  const {
    isLoadingVida,
    vidaCondicAloj,
    vidaSexo,
    vidaOtrosDep,
    vidaRedSoportePeru,
    vidaNivelEduc,
    vidaIngresoPromMen,
    vidaIdentGenero,
    vidaOrientacSexual,
    vidaEmbarazo,
    vidaHacinamiento,
    vidaCondicMigrat,
    vidaCondicLaboral,
    vidaDependientes,
    vidaCondicFisica,
    vidaSobrevVBG,
    vidaDocumentPosee,
    vidaSeguroSalud,
    vidaNacionalidad,
    vidaEdad,
    vidaHorasTrabajo,
    vidaFamDirectos,
    vidaTipoResidencia
  } = useVidaData(parameter)

  const { isLoading, isSuccess, data } = useParameter(parameter)
  const {
    isLoading: isLoadingStatus,
    isSuccess: isSuccessStatus,
    data: dataStatus
  } = useParameterStatus(parameter)
  const {
    isLoading: isLoadingProfile,
    isSuccess: isSuccessProfile,
    data: profiles,
    mutate
  } = useProfile(profile)

  useEffect(() => {
    if (isSuccess) {
      setTypeDocument(
        data?.map((val: any) =>
          Selector.fromJson({
            value: val.codigo,
            label: val.descripcion,
            code: val.idParam
          })
        ) as Selector[]
      )
    }
  }, [isSuccess, data])

  useEffect(() => {
    if (isSuccessProfile) {
      setTypeProfiles(
        profiles?.map((val: any) =>
          Selector.fromJson({ value: val.idPerfil, label: val.nombre })
        ) as Selector[]
      )
    }
  }, [isSuccessProfile, profiles])

  useEffect(() => {
    if (isSuccessStatus) {
      setEstadoProyecto(
        dataStatus?.map((val: any) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        ) as Selector[]
      )
    }
  }, [isSuccessStatus, dataStatus])

  useEffect(() => {
    if (isSuccessDataResultPart) {
      setListStatusParticipant(
        dataResultParticipant?.map((val: any) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        ) as Selector[]
      )
    }
  }, [isSuccessDataResultPart])

  useEffect(() => {
    mutate()
  }, [])

  return (
    <ParameterManageContext.Provider
      value={{
        setListUsers,
        setListProfiles,
        setListProjects,
        setListParticipants,
        listStatusParticipant,
        estadoProyecto,
        isLoadingSalud,
        saludEdad,
        saludSexo,
        saludOtrosDep,
        saludCondicAloj,
        saludRedSoportePeru,
        saludNivelEduc,
        saludIngresoPromMen,
        saludIdentGenero,
        saludOrientacSexual,
        saludEmbarazo,
        saludHacinamiento,
        saludCondicMigrat,
        saludCondicLaboral,
        saludDependientes,
        saludCondicFisica,
        saludSobrevVBG,
        saludDocumentPosee,
        saludSeguroSalud,
        saludNacionalidad,
        listProjects,
        listParticipants,
        listProfiles,
        listUsers,
        isLoadingVida,
        vidaCondicAloj,
        vidaSexo,
        vidaOtrosDep,
        vidaRedSoportePeru,
        vidaNivelEduc,
        vidaIngresoPromMen,
        vidaIdentGenero,
        vidaOrientacSexual,
        vidaEmbarazo,
        vidaHacinamiento,
        vidaCondicMigrat,
        vidaCondicLaboral,
        vidaDependientes,
        vidaCondicFisica,
        vidaSobrevVBG,
        vidaDocumentPosee,
        vidaSeguroSalud,
        vidaNacionalidad,
        vidaEdad,
        vidaHorasTrabajo,
        vidaFamDirectos,
        vidaTipoResidencia,
        type_document: typeDocument,
        type_profiles: typeProfiles,
        isLoading: isLoadingProfile || isLoading
      }}
    >
      {children}
      <Toaster position="top-center" />
    </ParameterManageContext.Provider>
  )
}

export default ParameterProvider
