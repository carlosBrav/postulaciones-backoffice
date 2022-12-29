export const participantsProyectCells: any[] = [
  {
    id: 'idParticipante',
    disablePadding: true,
    label: 'Id'
  },
  {
    id: 'dscTipDoc',
    disablePadding: false,
    label: 'Tipo Doc.'
  },
  {
    id: 'numDoc',
    disablePadding: false,
    label: 'Documento'
  },
  {
    id: 'nomParticipante',
    disablePadding: false,
    label: 'Nombre'
  },
  {
    id: 'scoreSalPro',
    disablePadding: false,
    label: 'S.P.'
  },
  {
    id: 'scoreMedVid',
    disablePadding: false,
    label: 'M.V.'
  },
  {
    id: 'scorePotEmp',
    disablePadding: false,
    label: 'P.Emp.'
  },
  {
    id: 'scorePitch',
    disablePadding: false,
    label: 'Pitch'
  },
  {
    id: 'scoreEntrev',
    disablePadding: false,
    label: 'Entrevista'
  },
  {
    id: 'dscEstado',
    disablePadding: false,
    label: 'Estado'
  },
]

export const headCells: any[] = [
  {
    id: 'idProyecto',
    disablePadding: true,
    label: 'Id'
  },
  {
    id: 'nombre',
    disablePadding: false,
    label: 'Nombre'
  },
  {
    id: 'jefe',
    disablePadding: false,
    label: 'Jefe'
  },
  {
    id: 'dscEstado',
    disablePadding: false,
    label: 'Estado'
  },

]
export type Tab = {
  label: string
  disabled: boolean
}

export const titles_tab: Tab[] = [
  { label: 'INFORMACION GENERAL', disabled: false },
  { label: 'PARTICIPANTES', disabled: false },
  { label: 'LANDING', disabled: false }
]
