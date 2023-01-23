import { useContext, useEffect, useState } from 'react'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { ParticipantEvaluation } from '@domain/project'

type Props = {
  evaluation1: ParticipantEvaluation
  evaluation2: ParticipantEvaluation
}

type Palette = {
  title: string
  color: string
}

const emptyPalette: Palette = {
  title: '',
  color: '#FFF'
}

const validateScore = (score: number) => {
  if (score >= 2.0 && score <= 3.0) {
    return {
      title: 'Alta',
      color: '#8ecd48'
    }
  }
  if (score >= 0.76 && score <= 1.99) {
    return {
      title: 'Media',
      color: '#fdff66'
    }
  }
  if (score >= 0 && score <= 0.75) {
    return {
      title: 'Baja',
      color: '#ff3e3f'
    }
  }
}

function useEvaluacionPreliminar({ evaluation1, evaluation2 }: Props) {
  const [paletteSalud, setPaletteSalud] = useState<Palette>(emptyPalette)
  const [paletteVida, setPaletteVida] = useState<Palette>(emptyPalette)
  const [score1, setScore1] = useState<number>(0)
  const [score2, setScore2] = useState<number>(0)
  const [dscEstadoEP, setDscEstadoEP] = useState<string>('')
  const { statusEP, setStatusEP } = useContext(ParameterManageContext)

  useEffect(() => {
    if (evaluation1) {
      setStatusEP(evaluation1.idEstado === '00002')
    }
  }, [evaluation1])

  useEffect(() => {
    if (evaluation1) {
      const result = validateScore(evaluation1.score)
      setPaletteSalud(result as Palette)
      setScore1(evaluation1.score)
    }
  }, [evaluation1])

  useEffect(() => {
    if (evaluation2) {
      const result = validateScore(evaluation2.score)
      setPaletteVida(result as Palette)
      setScore2(evaluation2.score)
    }
  }, [evaluation2])

  useEffect(() => {
    if (evaluation1) {
      setDscEstadoEP(evaluation1.dscEstado)
    }
  }, [evaluation1])

  return {
    paletteSalud,
    paletteVida,
    score1,
    score2,
    statusEP,
    dscEstadoEP,
    setStatusEP
  }
}

export { useEvaluacionPreliminar }
