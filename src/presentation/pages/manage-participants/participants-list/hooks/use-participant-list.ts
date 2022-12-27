import { ParticipantRepository, ParticipantResponse } from '@domain/participant'
import useParticipants from '@main/adapters/participant/use-participants'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteParticipant } from '@main/adapters/participant/use-delete-participant'
import { toast } from 'react-hot-toast'

function useParticipantList(repository: ParticipantRepository) {
  const navigate = useNavigate()
  let toastId: string
  const { listParticipants, setListParticipants } = useContext(
    ParameterManageContext
  )
  const { getAuthToken } = useAuthToken()
  const authToken = getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH as string)
  const {
    isSuccess: isSuccessDelete,
    isLoading: isLoadingDelete,
    mutate: mutateDelete
  } = useDeleteParticipant(repository, `${authToken?.idUsuario}`)

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

  const handleDelete = () => {
    mutateDelete(participantsSelected.map((val) => val.idParticipante))
  }

  useEffect(() => {
    mutate()
  }, [])

  useEffect(() => {
    if (isSuccessParticipants)
      setListParticipants(participants as ParticipantResponse[])
  }, [isSuccessParticipants])

  useEffect(() => {
    if (isLoadingDelete) {
      toastId = toast.loading('Eliminando participante...')
    }
  }, [isLoadingDelete])

  useEffect(() => {
    if (isSuccessDelete) {
      toast.dismiss(toastId)
      toast.success('Participante eliminado')
      setParticipantsSelected([])
      setOpenDelete(false)
      mutate()
    }
  }, [isSuccessDelete])

  return {
    listParticipants,
    isLoadingParticipants,
    participantsSelected,
    openDelete,
    setOpenDelete,
    goToEdit,
    goToCreate,
    setParticipantsSelected,
    handleDelete
  }
}

export default useParticipantList
