import React, { useEffect, useState } from 'react'
import { Selector } from '@domain/common/model/selector'
import useCriteria from '@main/adapters/parameter/use-criteria'
import { TYPE_PARAMETER, TYPE_CALCULO } from '@domain/parameter/constants'
import { ParameterRepository } from '@domain/parameter'

function useVidaData(repository: ParameterRepository) {
  const [vidaEdad, setVidaEdad] = useState<Selector[]>([])
  const [vidaSexo, setVidaSexo] = useState<Selector[]>([])
  const [vidaOtrosDep, setVidaOtrosDep] = useState<Selector[]>([])
  const [vidaCondicAloj, setVidaCondicAloj] = useState<Selector[]>([])
  const [vidaRedSoportePeru, setVidaRedSoportePeru] = useState<Selector[]>([])
  const [vidaNivelEduc, setVidaNivelEduc] = useState<Selector[]>([])
  const [vidaIngresoPromMen, setVidaIngresoPromMen] = useState<Selector[]>([])
  const [vidaIdentGenero, setVidaIdentGenero] = useState<Selector[]>([])
  const [vidaOrientacSexual, setVidaOrientacionSexual] = useState<Selector[]>(
    []
  )
  const [vidaEmbarazo, setVidaEmbarazo] = useState<Selector[]>([])
  const [vidaHacinamiento, setVidaHacinamiento] = useState<Selector[]>([])
  const [vidaCondicMigrat, setVidaCondicMigrat] = useState<Selector[]>([])
  const [vidaCondicLaboral, setVidaCondicLaboral] = useState<Selector[]>([])
  const [vidaDependientes, setVidaDependientes] = useState<Selector[]>([])
  const [vidaCondicFisica, setVidaCondicFisica] = useState<Selector[]>([])
  const [vidaSobrevVBG, setVidaSobrevVBG] = useState<Selector[]>([])
  const [vidaDocumentPosee, setVidaDocumentPosee] = useState<Selector[]>([])
  const [vidaSeguroSalud, setVidaSeguroSalud] = useState<Selector[]>([])
  const [vidaNacionalidad, setVidaNacionalidad] = useState<Selector[]>([])
  const [vidaFamDirectos, setVidaFamDirectos] = useState<Selector[]>([])
  const [vidaHorasTrabajo, setVidaHorasTrabajo] = useState<Selector[]>([])
  const [vidaTipoResidencia, setVidaTipoResidencia] = useState<Selector[]>([])

  const {
    isLoading: isLoadingTR,
    isSuccess: isSuccessTR,
    data: dataTR
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.tipo_residencia, repository)

  useEffect(() => {
    if (isSuccessTR && dataTR && dataTR?.length > 0) {
      setVidaTipoResidencia(
        dataTR.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessTR, dataTR])

  const {
    isLoading: isLoadingHT,
    isSuccess: isSuccessHT,
    data: dataHT
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.horas_trabajo, repository)

  useEffect(() => {
    if (isSuccessHT && dataHT && dataHT?.length > 0) {
      setVidaHorasTrabajo(
        dataHT.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessHT, dataHT])

  const {
    isLoading: isLoadingFD,
    isSuccess: isSuccessFD,
    data: dataFD
  } = useCriteria(
    TYPE_CALCULO.vida,
    TYPE_PARAMETER.familiares_directos,
    repository
  )

  useEffect(() => {
    if (isSuccessFD && dataFD && dataFD?.length > 0) {
      setVidaFamDirectos(
        dataFD.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessFD, dataFD])

  const {
    isLoading: isLoadingEdad,
    isSuccess: isSuccessEdad,
    data: dataEdad
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.edad, repository)

  useEffect(() => {
    if (isSuccessEdad && dataEdad && dataEdad?.length > 0) {
      setVidaEdad(
        dataEdad.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessEdad, dataEdad])

  const {
    isLoading: isLoadingSexo,
    isSuccess: isSuccessSexo,
    data: dataSexo
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.sexo, repository)

  useEffect(() => {
    if (isSuccessSexo && dataSexo && dataSexo?.length > 0) {
      setVidaSexo(
        dataSexo.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessSexo, dataSexo])

  const {
    isLoading: isLoadingOD,
    isSuccess: isSuccessOD,
    data: dataOD
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.otros_dep, repository)

  useEffect(() => {
    if (isSuccessOD && dataOD && dataOD?.length > 0) {
      setVidaOtrosDep(
        dataOD.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessOD, dataOD])

  const {
    isLoading: isLoadingCA,
    isSuccess: isSuccessCA,
    data: dataCA
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.condic_alojam, repository)

  useEffect(() => {
    if (isSuccessCA && dataCA && dataCA?.length > 0) {
      setVidaCondicAloj(
        dataCA.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessCA, dataCA])

  const {
    isLoading: isLoadingRSP,
    isSuccess: isSuccessRSP,
    data: dataRSP
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.red_sop_peru, repository)

  useEffect(() => {
    if (isSuccessRSP && dataRSP && dataRSP?.length > 0) {
      setVidaRedSoportePeru(
        dataRSP.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessRSP, dataRSP])

  const {
    isLoading: isLoadingNE,
    isSuccess: isSuccessNE,
    data: dataNE
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.nivel_educativo, repository)

  useEffect(() => {
    if (isSuccessNE && dataNE && dataNE?.length > 0) {
      setVidaNivelEduc(
        dataNE.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessNE, dataNE])

  const {
    isLoading: isLoadingIPM,
    isSuccess: isSuccessIPM,
    data: dataIPM
  } = useCriteria(
    TYPE_CALCULO.vida,
    TYPE_PARAMETER.ing_prom_mensual,
    repository
  )

  useEffect(() => {
    if (isSuccessIPM && dataIPM && dataIPM?.length > 0) {
      setVidaIngresoPromMen(
        dataIPM.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessIPM, dataIPM])

  const {
    isLoading: isLoadingIG,
    isSuccess: isSuccessIG,
    data: dataIG
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.ident_genero, repository)

  useEffect(() => {
    if (isSuccessIG && dataIG && dataIG?.length > 0) {
      setVidaIdentGenero(
        dataIG.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessIG, dataIG])

  const {
    isLoading: isLoadingOS,
    isSuccess: isSuccessOS,
    data: dataOS
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.orientac_sex, repository)

  useEffect(() => {
    if (isSuccessOS && dataOS && dataOS?.length > 0) {
      setVidaOrientacionSexual(
        dataOS.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessOS, dataOS])

  const {
    isLoading: isLoadingLact,
    isSuccess: isSuccessLact,
    data: dataLact
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.embarazo, repository)

  useEffect(() => {
    if (isSuccessLact && dataLact && dataLact?.length > 0) {
      setVidaEmbarazo(
        dataLact.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessLact, dataLact])

  const {
    isLoading: isLoadingHac,
    isSuccess: isSuccessHac,
    data: dataHac
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.hacinamiento, repository)

  useEffect(() => {
    if (isSuccessHac && dataHac && dataHac?.length > 0) {
      setVidaHacinamiento(
        dataHac.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessHac, dataHac])

  const {
    isLoading: isLoadingCM,
    isSuccess: isSuccessCM,
    data: dataCM
  } = useCriteria(
    TYPE_CALCULO.vida,
    TYPE_PARAMETER.condic_migratoria,
    repository
  )

  useEffect(() => {
    if (isSuccessCM && dataCM && dataCM?.length > 0) {
      setVidaCondicMigrat(
        dataCM.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessCM, dataCM])

  const {
    isLoading: isLoadingCL,
    isSuccess: isSuccessCL,
    data: dataCL
  } = useCriteria(
    TYPE_CALCULO.vida,
    TYPE_PARAMETER.condicion_laboral,
    repository
  )

  useEffect(() => {
    if (isSuccessCL && dataCL && dataCL?.length > 0) {
      setVidaCondicLaboral(
        dataCL.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessCL, dataCL])

  const {
    isLoading: isLoadingDep,
    isSuccess: isSuccessDep,
    data: dataDep
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.dep_men_5, repository)

  useEffect(() => {
    if (isSuccessDep && dataDep && dataDep?.length > 0) {
      setVidaDependientes(
        dataDep.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessDep, dataDep])

  const {
    isLoading: isLoadingCF,
    isSuccess: isSuccessCF,
    data: dataCF
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.condic_fisica, repository)

  useEffect(() => {
    if (isSuccessCF && dataCF && dataCF?.length > 0) {
      setVidaCondicFisica(
        dataCF.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessCF, dataCF])

  const {
    isLoading: isLoadingSVBG,
    isSuccess: isSuccessSVBG,
    data: dataSVBG
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.sobrev_vbg, repository)

  useEffect(() => {
    if (isSuccessSVBG && dataSVBG && dataSVBG?.length > 0) {
      setVidaSobrevVBG(
        dataSVBG.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessSVBG, dataSVBG])

  const {
    isLoading: isLoadingDP,
    isSuccess: isSuccessDP,
    data: dataDP
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.documento_posee, repository)

  useEffect(() => {
    if (isSuccessDP && dataDP && dataDP?.length > 0) {
      setVidaDocumentPosee(
        dataDP.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessDP, dataDP])

  const {
    isLoading: isLoadingSS,
    isSuccess: isSuccessSS,
    data: dataSS
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.seguro_salud, repository)

  useEffect(() => {
    if (isSuccessSS && dataSS && dataSS?.length > 0) {
      setVidaSeguroSalud(
        dataSS.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessSS, dataSS])

  const {
    isLoading: isLoadingNac,
    isSuccess: isSuccessNac,
    data: dataNac
  } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.nacionalidad, repository)

  useEffect(() => {
    if (isSuccessNac && dataNac && dataNac?.length > 0) {
      setVidaNacionalidad(
        dataNac.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessNac, dataNac])

  return {
    isLoadingVida:
      isLoadingSexo ||
      isLoadingOD ||
      isLoadingCA ||
      isLoadingRSP ||
      isLoadingNE ||
      isLoadingIPM ||
      isLoadingIG ||
      isLoadingOS ||
      isLoadingLact ||
      isLoadingHac ||
      isLoadingCM ||
      isLoadingCL ||
      isLoadingDep ||
      isLoadingCF ||
      isLoadingSVBG ||
      isLoadingDP ||
      isLoadingSS ||
      isLoadingNac ||
      isLoadingEdad ||
      isLoadingHT ||
      isLoadingFD ||
      isLoadingTR,
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
  }
}

export { useVidaData }
