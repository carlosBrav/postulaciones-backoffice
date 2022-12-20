import { useEffect, useState } from 'react'
import useUsers from '@main/adapters/user/use-user'
import useDeleteUser from '@main/adapters/user/user-delete'
import { useNavigate } from 'react-router-dom'
import useAuthToken from '@presentation/pages/hooks/use-auth-token/use-auth-token'
import { UserRepository, User } from '@domain/user'
import { useContext } from 'react'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'

export default function useUsersList(repository: UserRepository) {
  const { getAuthToken } = useAuthToken()
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [contentsSelected, setContentsSelected] = useState<any[]>([])
  const { setListUsers, listUsers } = useContext(ParameterManageContext)
  const {
    mutate,
    isLoading: isLoadingDeleteUser,
    isSuccess: isSuccessDelete,
  } = useDeleteUser(
    repository,
    `${getAuthToken(import.meta.env.VITE_APP_PARAM_AUTH as string)?.idUsuario}`
  )
  const handleDeleteUser = () => {
    mutate(contentsSelected as User[])
  }
  const {
    data: dataUser,
    isLoading: isLoadingUsers,
    isSuccess: isSuccessUsers,
    mutate: mutateUsers
  } = useUsers(repository)
  const navigate = useNavigate()
  const goToEdit = () => {
    navigate(`edit/${contentsSelected[0].idUsuario}`)
  }
  const goToCreate = () => {
    navigate(`new`)
  }
  
  useEffect(() => {
    if (isSuccessDelete) {
      setOpenDelete(false)
      setListUsers(listUsers.filter((val)=> !contentsSelected.find((data)=> data.idUsuario === val.idUsuario)))
      setContentsSelected([])
    }
  }, [isSuccessDelete])

  useEffect(() => {
    if (isSuccessUsers) {
      setListUsers(dataUser as User[])
    }
  }, [isSuccessUsers])

  useEffect(()=>{
    mutateUsers()
  },[])

  return {
    openDelete,
    contentsSelected,
    isLoadingDeleteUser,
    isLoadingUsers,
    listUsers,
    handleDeleteUser,
    setOpenDelete,
    goToEdit,
    goToCreate,
    setContentsSelected,
  }
}
