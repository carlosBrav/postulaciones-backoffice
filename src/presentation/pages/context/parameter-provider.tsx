import React, { HTMLProps, useEffect, useState } from 'react'
import { ParameterManageContext } from './parameter-context'
import { ParameterRepository } from '@domain/parameter'
import { Profile, ProfileRepository } from '@domain/profiles'
import useParameter from '@main/adapters/parameter/use-parameter'
import useProfile from '@main/adapters/profile/use-profile'
import { Selector } from '@domain/common/model/selector'
import {Toaster} from 'react-hot-toast';
import { User } from '@domain/user'

type Props = {
  parameter: ParameterRepository
  profile: ProfileRepository
} & HTMLProps<HTMLDivElement>

function ParameterProvider({ children, parameter, profile }: Props) {
  const [typeDocument, setTypeDocument] = useState<Selector[]>([])
  const [typeProfiles, setTypeProfiles] = useState<Selector[]>([])
  const [listUsers,setListUsers] = useState<User[]>([])
  const [listProfiles, setListProfiles] = useState<Profile[]>([])
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
          Selector.fromJson({ value: val.codigo, label: val.descripcion, code: val.idParam })
        ) as Selector[]
      )
    }
  }, [isSuccess, data])

  useEffect(()=>{
    if (isSuccessProfile) {
      setTypeProfiles(
        profiles?.map((val: any) =>
          Selector.fromJson({ value: val.idPerfil, label: val.nombre })
        ) as Selector[]
      )
    }
  },[isSuccessProfile,profiles])

  useEffect(()=>{
    mutate()
  },[])

  return (
    <ParameterManageContext.Provider
      value={{
        setListUsers,
        setListProfiles,
        listProfiles,
        listUsers,
        type_document:typeDocument,
        type_profiles:typeProfiles,
        isLoading: isLoadingProfile || isLoading,
      }}
    >
      {children}
      <Toaster position="top-center" />
    </ParameterManageContext.Provider>
  )
}

export default ParameterProvider
