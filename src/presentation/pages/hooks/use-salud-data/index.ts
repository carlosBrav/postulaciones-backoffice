import React, { useEffect, useState } from 'react'
import { Selector } from '@domain/common/model/selector'
import useCriteria from '@main/adapters/parameter/use-criteria'
import { TYPE_PARAMETER, TYPE_CALCULO } from '@domain/parameter/constants'
import { ParameterRepository } from '@domain/parameter'

function useSaludData(repository: ParameterRepository) {
  const [saludEdad, setSaludEdad] = useState<Selector[]>([])
  const [saludSexo, setSaludSexo] = useState<Selector[]>([])
  const [saludOtrosDep, setSaludOtrosDep] = useState<Selector[]>([])
  const [saludCondicAloj, setSaludCondicAloj] = useState<Selector[]>([])
  const [saludRedSoportePeru, setSaludRedSoportePeru] = useState<Selector[]>([])
  const [saludNivelEduc, setSaludNivelEduc] = useState<Selector[]>([])
  const [saludIngresoPromMen, setSaludIngresoPromMen] = useState<Selector[]>([])
  const [saludIdentGenero, setSaludIdentGenero] = useState<Selector[]>([])
  const [saludOrientacSexual, setSaludOrientacionSexual] = useState<Selector[]>(
    []
  )
  const [saludEmbarazo, setSaludEmbarazo] = useState<Selector[]>([])
  const [saludHacinamiento, setSaludHacinamiento] = useState<Selector[]>([])
  const [saludCondicMigrat, setSaludCondicMigrat] = useState<Selector[]>([])
  const [saludCondicLaboral, setSaludCondicLaboral] = useState<Selector[]>([])
  const [saludDependientes, setSaludDependientes] = useState<Selector[]>([])
  const [saludCondicFisica, setSaludCondicFisica] = useState<Selector[]>([])
  const [saludSobrevVBG, setSaludSobrevVBG] = useState<Selector[]>([])
  const [saludDocumentPosee, setSaludDocumentPosee] = useState<Selector[]>([])
  const [saludSeguroSalud, setSaludSeguroSalud] = useState<Selector[]>([])
  const [saludNacionalidad, setSaludNacionalidad] = useState<Selector[]>([])

  const {
    isLoading: isLoadingEdad,
    isSuccess: isSuccessEdad,
    data: dataEdad
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.edad, repository)

  useEffect(() => {
    if (isSuccessEdad && dataEdad && dataEdad?.length > 0) {
      setSaludEdad(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.sexo, repository)

  useEffect(() => {
    if (isSuccessSexo && dataSexo && dataSexo?.length > 0) {
      setSaludSexo(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.otros_dep, repository)

  useEffect(() => {
    if (isSuccessOD && dataOD && dataOD?.length > 0) {
      setSaludOtrosDep(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.condic_alojam, repository)

  useEffect(() => {
    if (isSuccessCA && dataCA && dataCA?.length > 0) {
      setSaludCondicAloj(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.red_sop_peru, repository)

  useEffect(() => {
    if (isSuccessRSP && dataRSP && dataRSP?.length > 0) {
      setSaludRedSoportePeru(
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
  } = useCriteria(
    TYPE_CALCULO.salud,
    TYPE_PARAMETER.nivel_educativo,
    repository
  )

  useEffect(() => {
    if (isSuccessNE && dataNE && dataNE?.length > 0) {
      setSaludNivelEduc(
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
    TYPE_CALCULO.salud,
    TYPE_PARAMETER.ing_prom_mensual,
    repository
  )

  useEffect(() => {
    if (isSuccessIPM && dataIPM && dataIPM?.length > 0) {
      setSaludIngresoPromMen(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.ident_genero, repository)

  useEffect(() => {
    if (isSuccessIG && dataIG && dataIG?.length > 0) {
      setSaludIdentGenero(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.orientac_sex, repository)

  useEffect(() => {
    if (isSuccessOS && dataOS && dataOS?.length > 0) {
      setSaludOrientacionSexual(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.embarazo, repository)

  useEffect(() => {
    if (isSuccessLact && dataLact && dataLact?.length > 0) {
      setSaludEmbarazo(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.hacinamiento, repository)

  useEffect(() => {
    if (isSuccessHac && dataHac && dataHac?.length > 0) {
      setSaludHacinamiento(
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
    TYPE_CALCULO.salud,
    TYPE_PARAMETER.condic_migratoria,
    repository
  )

  useEffect(() => {
    if (isSuccessCM && dataCM && dataCM?.length > 0) {
      setSaludCondicMigrat(
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
    TYPE_CALCULO.salud,
    TYPE_PARAMETER.condicion_laboral,
    repository
  )

  useEffect(() => {
    if (isSuccessCL && dataCL && dataCL?.length > 0) {
      setSaludCondicLaboral(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.dep_men_5, repository)

  useEffect(() => {
    if (isSuccessDep && dataDep && dataDep?.length > 0) {
      setSaludDependientes(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.condic_fisica, repository)

  useEffect(() => {
    if (isSuccessCF && dataCF && dataCF?.length > 0) {
      setSaludCondicFisica(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.sobrev_vbg, repository)

  useEffect(() => {
    if (isSuccessSVBG && dataSVBG && dataSVBG?.length > 0) {
      setSaludSobrevVBG(
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
  } = useCriteria(
    TYPE_CALCULO.salud,
    TYPE_PARAMETER.documento_posee,
    repository
  )

  useEffect(() => {
    if (isSuccessDP && dataDP && dataDP?.length > 0) {
      setSaludDocumentPosee(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.seguro_salud, repository)

  useEffect(() => {
    if (isSuccessSS && dataSS && dataSS?.length > 0) {
      setSaludSeguroSalud(
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
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.nacionalidad, repository)

  useEffect(() => {
    if (isSuccessNac && dataNac && dataNac?.length > 0) {
      setSaludNacionalidad(
        dataNac.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessNac, dataNac])

  return {
    isLoadingSalud:
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
      isLoadingEdad,
    saludEdad,
    saludSexo,
    saludOtrosDep,
    saludCondicAloj,
    saludRedSoportePeru,
    saludNivelEduc,
    saludIngresoPromMen,
    saludIdentGenero,
    saludOrientacSexual,
    saludEmbarazo,
    saludHacinamiento,
    saludCondicMigrat,
    saludCondicLaboral,
    saludDependientes,
    saludCondicFisica,
    saludSobrevVBG,
    saludDocumentPosee,
    saludSeguroSalud,
    saludNacionalidad
  }
}

export { useSaludData }
