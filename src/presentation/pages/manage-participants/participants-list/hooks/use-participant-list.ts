import { ParticipantRepository, ParticipantResponse } from '@domain/participant'
import useParticipants from '@main/adapters/participant/use-participants'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function useParticipantList(repository: ParticipantRepository) {
  const navigate = useNavigate()
  const { listParticipants, setListParticipants } = useContext(
    ParameterManageContext
  )
  const { getAuthToken } = useAuthToken()
  const [participantsSelected, setParticipantsSelected] = useState<any[]>([])
  const {
    mutate,
    isLoading: isLoadingParticipants,
    data: participants,
    isSuccess: isSuccessParticipants
  } = useParticipants(repository)
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const goToEdit = () => {
    navigate(`edit/${participantsSelected[0].idParticipante}`)
  }
  const goToCreate = () => {
    navigate(`new`)
  }

  useEffect(() => {
    mutate()
  }, [])

  useEffect(() => {
    if (isSuccessParticipants)
      setListParticipants(participants as ParticipantResponse[])
  }, [isSuccessParticipants])

  return {
    listParticipants,
    isLoadingParticipants,
    participantsSelected,
    openDelete,
    setOpenDelete,
    goToEdit,
    goToCreate,
    setParticipantsSelected
  }
}

export default useParticipantList
