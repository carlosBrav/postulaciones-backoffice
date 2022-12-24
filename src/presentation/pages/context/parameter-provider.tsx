import React, { HTMLProps, useEffect, useState } from 'react'
import { ParameterManageContext } from './parameter-context'
import { ParameterRepository } from '@domain/parameter'
import { Profile, ProfileRepository } from '@domain/profiles'
import useParameter from '@main/adapters/parameter/use-parameter-type-document'
import useProfile from '@main/adapters/profile/use-profile'
import { Selector } from '@domain/common/model/selector'
import { Toaster } from 'react-hot-toast'
import { User } from '@domain/user'
import { ProjectResponse } from '@domain/project'
import { ParticipantResponse } from '@domain/participant'

type Props = {
  parameter: ParameterRepository
  profile: ProfileRepository
} & HTMLProps<HTMLDivElement>

function ParameterProvider({ children, parameter, profile }: Props) {
  const [typeDocument, setTypeDocument] = useState<Selector[]>([])
  const [typeProfiles, setTypeProfiles] = useState<Selector[]>([])
  const [listUsers, setListUsers] = useState<User[]>([])
  const [listProfiles, setListProfiles] = useState<Profile[]>([])
  const [listProjects, setListProjects] = useState<ProjectResponse[]>([])
  const [listParticipants, setListParticipants] = useState<
    ParticipantResponse[]
  >([])
  const [edad, setEdad] = useState<Selector[]>([])
  const [sexo, setSexo] = useState<Selector[]>([])
  const [otrosDep, setOtrosDep] = useState<Selector[]>([])
  const [condicAloj, setCondicAloj] = useState<Selector[]>([])
  const [redSoportePeru, setRedSoportePeru] = useState<Selector[]>([])
  const [nivelEduc, setNivelEduc] = useState<Selector[]>([])
  const [ingresoPromMen, setIngresoPromMen] = useState<Selector[]>([])
  const [identGenero, setIdentGenero] = useState<Selector[]>([])
  const [orientacSexual, setOrientacionSexual] = useState<Selector[]>([])
  const [embarazo, setEmbarazo] = useState<Selector[]>([])
  const [hacinamiento, setHacinamiento] = useState<Selector[]>([])
  const [condicMigrat, setCondicMigrat] = useState<Selector[]>([])
  const [condicLaboral, setCondicLaboral] = useState<Selector[]>([])
  const [dependientes, setDependientes] = useState<Selector[]>([])
  const [condicFisica, setCondicFisica] = useState<Selector[]>([])
  const [sobrevVBG, setSobrevVBG] = useState<Selector[]>([])
  const [documentPosee, setDocumentPosee] = useState<Selector[]>([])
  const [seguroSalud, setSeguroSalud] = useState<Selector[]>([])
  const [nacionalidad, setNacionalidad] = useState<Selector[]>([])

  const { isLoading, isSuccess, data } = useParameter(parameter)
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
    mutate()
  }, [])

  return (
    <ParameterManageContext.Provider
      value={{
        setEdad,
        setListUsers,
        setListProfiles,
        setListProjects,
        setListParticipants,
        setSexo,
        setOtrosDep,
        setCondicAloj,
        setRedSoportePeru,
        setNivelEduc,
        setIngresoPromMen,
        setIdentGenero,
        setOrientacionSexual,
        setEmbarazo,
        setHacinamiento,
        setCondicMigrat,
        setCondicLaboral,
        setDependientes,
        setCondicFisica,
        setSobrevVBG,
        setDocumentPosee,
        setSeguroSalud,
        setNacionalidad,
        edad,
        sexo,
        otrosDep,
        condicAloj,
        redSoportePeru,
        nivelEduc,
        ingresoPromMen,
        identGenero,
        orientacSexual,
        embarazo,
        hacinamiento,
        condicMigrat,
        condicLaboral,
        dependientes,
        condicFisica,
        sobrevVBG,
        documentPosee,
        seguroSalud,
        nacionalidad,
        listProjects,
        listParticipants,
        listProfiles,
        listUsers,
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
