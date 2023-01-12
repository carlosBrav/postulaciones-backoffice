import * as FileSaver from 'file-saver'
import { useState } from 'react'
import * as XLSX from 'xlsx'
import { ParticipanteExcel } from '@domain/project/models/participante-excel'

function useExportParticipant() {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  const fileExtension = '.xlsx'

  const [open, setOpen] = useState<boolean>(false)

  const exportToCSV = (apiData: any, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(apiData)
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] }
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    const data = new Blob([excelBuffer], { type: fileType })
    FileSaver.saveAs(data, fileName + fileExtension)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleAccept = (data: any, fileName: string) => {
    const dataToExport = data.map((val: any) =>
      ParticipanteExcel.fromJson({
        nomParticipante: val.nomParticipante,
        dscTipDoc: val.dscTipDoc,
        numDoc: val.numDoc,
        dscEstado: val.dscEstado,
        dscResultado: val.dscResultado,
        scoreSalPro: val.scoreSalPro,
        scoreMedVid: val.scoreMedVid,
        scorePotEmp: val.scorePotEmp,
        scorePitch: val.scorePitch,
        scoreEntrev: val.scoreEntrev
      })
    )
    exportToCSV(dataToExport, fileName)
    setOpen(false)
  }

  return {
    exportToCSV,
    handleCancel,
    handleAccept,
    handleOpen,
    open
  }
}

export { useExportParticipant }
