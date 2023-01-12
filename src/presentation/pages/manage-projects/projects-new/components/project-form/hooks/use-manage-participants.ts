import {
  Participante,
  ProjectParticipantCreateReq,
  ProjectParticipantDelete,
  ProjectParticipantDeleteRequest,
  ProjectParticipantRequest
} from '@domain/project'
import { ProjectParticipReqEval } from '@domain/project/models/project-particip-request-eval'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function useManageParticipants(
  handleEmailParticipants = (data: ProjectParticipantCreateReq) => {},
  handleAddParticipants = (data: ProjectParticipantCreateReq) => {},
  handleDeleteParticipants = (data: ProjectParticipantDeleteRequest) => {},
  participantes: Participante[] = [],
  id: string = '',
  idCurrentUsuario: number = 0
) {
  const navigate = useNavigate()
  const [participantsSelected, setParticipantsSelected] = useState<any[]>([])
  const [openDelete, setOpenDelete] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openModalEmail, setOpenModalEmail] = useState<boolean>(false)
  const [participantesFilter, setParticipantesFilter] = useState<
    Participante[]
  >([])
  const [search, setSearch] = useState<string>('')
  const [noEvaluation, setNoEvaluation] = useState<boolean>(false)

  useEffect(() => {
    if (participantes && participantes.length > 0) {
      setParticipantesFilter([...participantes])
    }
  }, [participantes])

  useEffect(() => {
    if (search.length === 0) {
      setParticipantesFilter([...participantes])
    } else {
      setParticipantesFilter(
        participantesFilter.filter(
          (val) =>
            val.nomParticipante.toUpperCase().includes(search.toUpperCase()) ||
            val.numDoc.includes(search)
        )
      )
    }
  }, [search])

  const handleAcceptModal = (data: ProjectParticipantCreateReq) => {
    handleAddParticipants(data)
    setOpenModal(false)
  }

  const handleDelete = () => {
    const deleteObject = new ProjectParticipantDeleteRequest()
    deleteObject.idProyecto = +id
    deleteObject.listProyectoParticipante = participantsSelected.map((val) =>
      ProjectParticipantDelete.fromJson({
        idParticipante: val.idParticipante
      })
    )
    handleDeleteParticipants(deleteObject)
    setParticipantsSelected([])
    setOpenDelete(false)
  }

  const handleSentEmail = () => {
    const ppcObject = new ProjectParticipantCreateReq()
    ppcObject.idProyecto = +id
    ppcObject.idUsuMod = idCurrentUsuario
    ppcObject.listProyectoParticipante = participantsSelected.map((val) =>
      ProjectParticipantRequest.fromJson({
        idParticipante: val.idParticipante,
        idEstado: '00002',
        idResultado: '00003',
        listProyectoParticipanteEval: [1, 2].map((data) =>
          ProjectParticipReqEval.fromJson({
            idEvaluacion: data,
            idEstado: '00001',
            idTipo: `0000${data}`,
            score: data === 1 ? val.scoreSalPro : val.scoreMedVid
          })
        )
      })
    )
    handleEmailParticipants(ppcObject)
    setOpenDelete(false)
    setParticipantsSelected([])
  }

  const handleEvaluations = () => {
    const isNotAllowed =
      participantsSelected.filter((val) => val.dscEstado === 'Pendiente')
        .length > 0
    if (isNotAllowed) {
      setNoEvaluation(true)
    } else {
      navigate(
        `/dashboard/manage-projects/evaluation/project/${id}/participant/${participantsSelected[0].idParticipante}`
      )
    }
  }

  return {
    handleEvaluations,
    handleDelete,
    handleAcceptModal,
    handleSentEmail,
    setOpenDelete,
    setOpenModalEmail,
    setOpenModal,
    setSearch,
    setParticipantsSelected,
    setNoEvaluation,
    search,
    participantesFilter,
    openDelete,
    openModal,
    openModalEmail,
    noEvaluation,
    participantsSelected
  }
}

export { useManageParticipants }
