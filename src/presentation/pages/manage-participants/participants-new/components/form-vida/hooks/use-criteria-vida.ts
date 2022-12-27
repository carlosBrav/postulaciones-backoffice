import useCriteria from '@main/adapters/parameter/use-criteria'
import { TYPE_PARAMETER, TYPE_CALCULO } from '@domain/parameter/constants'
import { ParameterRepository } from '@domain/parameter'
import { Selector } from '@domain/common/model/selector'
import { useContext, useEffect, useState } from 'react'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'

function useCriteriaVida() {
  const {
    isLoadingVida,
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
  } = useContext(ParameterManageContext)

  return {
    isLoadingVida,
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
  // const [edad, setEdad] = useState<Selector[]>([])
  // const [sexo, setSexo] = useState<Selector[]>([])
  // const [otrosDep, setOtrosDep] = useState<Selector[]>([])
  // const [condicAloj, setCondicAloj] = useState<Selector[]>([])
  // const [redSoportePeru, setRedSoportePeru] = useState<Selector[]>([])
  // const [nivelEduc, setNivelEduc] = useState<Selector[]>([])
  // const [ingresoPromMen, setIngresoPromMen] = useState<Selector[]>([])
  // const [identGenero, setIdentGenero] = useState<Selector[]>([])
  // const [orientacSexual, setOrientacionSexual] = useState<Selector[]>([])
  // const [embarazo, setEmbarazo] = useState<Selector[]>([])
  // const [hacinamiento, setHacinamiento] = useState<Selector[]>([])
  // const [condicMigrat, setCondicMigrat] = useState<Selector[]>([])
  // const [condicLaboral, setCondicLaboral] = useState<Selector[]>([])
  // const [dependientes, setDependientes] = useState<Selector[]>([])
  // const [condicFisica, setCondicFisica] = useState<Selector[]>([])
  // const [sobrevVBG, setSobrevVBG] = useState<Selector[]>([])
  // const [documentPosee, setDocumentPosee] = useState<Selector[]>([])
  // const [seguroSalud, setSeguroSalud] = useState<Selector[]>([])
  // const [nacionalidad, setNacionalidad] = useState<Selector[]>([])
  // const [famDirectos, setFamDirectos] = useState<Selector[]>([])
  // const [horasTrabajo, setHorasTrabajo] = useState<Selector[]>([])
  // const [tipoResidencia, setTipoResidencia] = useState<Selector[]>([])
  // const {
  //   isLoading: isLoadingTR,
  //   isSuccess: isSuccessTR,
  //   data: dataTR
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.tipo_residencia, repository)
  // useEffect(() => {
  //   if (isSuccessTR && dataTR && dataTR?.length > 0) {
  //     setTipoResidencia(
  //       dataTR.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessTR, dataTR])
  // const {
  //   isLoading: isLoadingHT,
  //   isSuccess: isSuccessHT,
  //   data: dataHT
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.horas_trabajo, repository)
  // useEffect(() => {
  //   if (isSuccessHT && dataHT && dataHT?.length > 0) {
  //     setHorasTrabajo(
  //       dataHT.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessHT, dataHT])
  // const {
  //   isLoading: isLoadingFD,
  //   isSuccess: isSuccessFD,
  //   data: dataFD
  // } = useCriteria(
  //   TYPE_CALCULO.vida,
  //   TYPE_PARAMETER.familiares_directos,
  //   repository
  // )
  // useEffect(() => {
  //   if (isSuccessFD && dataFD && dataFD?.length > 0) {
  //     setFamDirectos(
  //       dataFD.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessFD, dataFD])
  // const {
  //   isLoading: isLoadingEdad,
  //   isSuccess: isSuccessEdad,
  //   data: dataEdad
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.edad, repository)
  // useEffect(() => {
  //   if (isSuccessEdad && dataEdad && dataEdad?.length > 0) {
  //     setEdad(
  //       dataEdad.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessEdad, dataEdad])
  // const {
  //   isLoading: isLoadingSexo,
  //   isSuccess: isSuccessSexo,
  //   data: dataSexo
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.sexo, repository)
  // useEffect(() => {
  //   if (isSuccessSexo && dataSexo && dataSexo?.length > 0) {
  //     setSexo(
  //       dataSexo.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessSexo, dataSexo])
  // const {
  //   isLoading: isLoadingOD,
  //   isSuccess: isSuccessOD,
  //   data: dataOD
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.otros_dep, repository)
  // useEffect(() => {
  //   if (isSuccessOD && dataOD && dataOD?.length > 0) {
  //     setOtrosDep(
  //       dataOD.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessOD, dataOD])
  // const {
  //   isLoading: isLoadingCA,
  //   isSuccess: isSuccessCA,
  //   data: dataCA
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.condic_alojam, repository)
  // useEffect(() => {
  //   if (isSuccessCA && dataCA && dataCA?.length > 0) {
  //     setCondicAloj(
  //       dataCA.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessCA, dataCA])
  // const {
  //   isLoading: isLoadingRSP,
  //   isSuccess: isSuccessRSP,
  //   data: dataRSP
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.red_sop_peru, repository)
  // useEffect(() => {
  //   if (isSuccessRSP && dataRSP && dataRSP?.length > 0) {
  //     setRedSoportePeru(
  //       dataRSP.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessRSP, dataRSP])
  // const {
  //   isLoading: isLoadingNE,
  //   isSuccess: isSuccessNE,
  //   data: dataNE
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.nivel_educativo, repository)
  // useEffect(() => {
  //   if (isSuccessNE && dataNE && dataNE?.length > 0) {
  //     setNivelEduc(
  //       dataNE.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessNE, dataNE])
  // const {
  //   isLoading: isLoadingIPM,
  //   isSuccess: isSuccessIPM,
  //   data: dataIPM
  // } = useCriteria(
  //   TYPE_CALCULO.vida,
  //   TYPE_PARAMETER.ing_prom_mensual,
  //   repository
  // )
  // useEffect(() => {
  //   if (isSuccessIPM && dataIPM && dataIPM?.length > 0) {
  //     setIngresoPromMen(
  //       dataIPM.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessIPM, dataIPM])
  // const {
  //   isLoading: isLoadingIG,
  //   isSuccess: isSuccessIG,
  //   data: dataIG
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.ident_genero, repository)
  // useEffect(() => {
  //   if (isSuccessIG && dataIG && dataIG?.length > 0) {
  //     setIdentGenero(
  //       dataIG.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessIG, dataIG])
  // const {
  //   isLoading: isLoadingOS,
  //   isSuccess: isSuccessOS,
  //   data: dataOS
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.orientac_sex, repository)
  // useEffect(() => {
  //   if (isSuccessOS && dataOS && dataOS?.length > 0) {
  //     setOrientacionSexual(
  //       dataOS.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessOS, dataOS])
  // const {
  //   isLoading: isLoadingLact,
  //   isSuccess: isSuccessLact,
  //   data: dataLact
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.embarazo, repository)
  // useEffect(() => {
  //   if (isSuccessLact && dataLact && dataLact?.length > 0) {
  //     setEmbarazo(
  //       dataLact.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessLact, dataLact])
  // const {
  //   isLoading: isLoadingHac,
  //   isSuccess: isSuccessHac,
  //   data: dataHac
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.hacinamiento, repository)
  // useEffect(() => {
  //   if (isSuccessHac && dataHac && dataHac?.length > 0) {
  //     setHacinamiento(
  //       dataHac.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessHac, dataHac])
  // const {
  //   isLoading: isLoadingCM,
  //   isSuccess: isSuccessCM,
  //   data: dataCM
  // } = useCriteria(
  //   TYPE_CALCULO.vida,
  //   TYPE_PARAMETER.condic_migratoria,
  //   repository
  // )
  // useEffect(() => {
  //   if (isSuccessCM && dataCM && dataCM?.length > 0) {
  //     setCondicMigrat(
  //       dataCM.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessCM, dataCM])
  // const {
  //   isLoading: isLoadingCL,
  //   isSuccess: isSuccessCL,
  //   data: dataCL
  // } = useCriteria(
  //   TYPE_CALCULO.vida,
  //   TYPE_PARAMETER.condicion_laboral,
  //   repository
  // )
  // useEffect(() => {
  //   if (isSuccessCL && dataCL && dataCL?.length > 0) {
  //     setCondicLaboral(
  //       dataCL.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessCL, dataCL])
  // const {
  //   isLoading: isLoadingDep,
  //   isSuccess: isSuccessDep,
  //   data: dataDep
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.dep_men_5, repository)
  // useEffect(() => {
  //   if (isSuccessDep && dataDep && dataDep?.length > 0) {
  //     setDependientes(
  //       dataDep.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessDep, dataDep])
  // const {
  //   isLoading: isLoadingCF,
  //   isSuccess: isSuccessCF,
  //   data: dataCF
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.condic_fisica, repository)
  // useEffect(() => {
  //   if (isSuccessCF && dataCF && dataCF?.length > 0) {
  //     setCondicFisica(
  //       dataCF.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessCF, dataCF])
  // const {
  //   isLoading: isLoadingSVBG,
  //   isSuccess: isSuccessSVBG,
  //   data: dataSVBG
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.sobrev_vbg, repository)
  // useEffect(() => {
  //   if (isSuccessSVBG && dataSVBG && dataSVBG?.length > 0) {
  //     setSobrevVBG(
  //       dataSVBG.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessSVBG, dataSVBG])
  // const {
  //   isLoading: isLoadingDP,
  //   isSuccess: isSuccessDP,
  //   data: dataDP
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.documento_posee, repository)
  // useEffect(() => {
  //   if (isSuccessDP && dataDP && dataDP?.length > 0) {
  //     setDocumentPosee(
  //       dataDP.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessDP, dataDP])
  // const {
  //   isLoading: isLoadingSS,
  //   isSuccess: isSuccessSS,
  //   data: dataSS
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.seguro_salud, repository)
  // useEffect(() => {
  //   if (isSuccessSS && dataSS && dataSS?.length > 0) {
  //     setSeguroSalud(
  //       dataSS.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessSS, dataSS])
  // const {
  //   isLoading: isLoadingNac,
  //   isSuccess: isSuccessNac,
  //   data: dataNac
  // } = useCriteria(TYPE_CALCULO.vida, TYPE_PARAMETER.nacionalidad, repository)
  // useEffect(() => {
  //   if (isSuccessNac && dataNac && dataNac?.length > 0) {
  //     setNacionalidad(
  //       dataNac.map((val) =>
  //         Selector.fromJson({ value: val.codigo, label: val.descripcion })
  //       )
  //     )
  //   }
  // }, [isSuccessNac, dataNac])
  // useEffect(() => {
  //   if (id) {
  //     editValues()
  //   }
  // }, [id])
  // return {
  //   isLoading:
  //     isLoadingSexo ||
  //     isLoadingOD ||
  //     isLoadingCA ||
  //     isLoadingRSP ||
  //     isLoadingNE ||
  //     isLoadingIPM ||
  //     isLoadingIG ||
  //     isLoadingOS ||
  //     isLoadingLact ||
  //     isLoadingHac ||
  //     isLoadingCM ||
  //     isLoadingCL ||
  //     isLoadingDep ||
  //     isLoadingCF ||
  //     isLoadingSVBG ||
  //     isLoadingDP ||
  //     isLoadingSS ||
  //     isLoadingNac ||
  //     isLoadingEdad ||
  //     isLoadingHT ||
  //     isLoadingFD ||
  //     isLoadingTR,
  //   condicAloj,
  //   sexo,
  //   otrosDep,
  //   redSoportePeru,
  //   nivelEduc,
  //   ingresoPromMen,
  //   identGenero,
  //   orientacSexual,
  //   embarazo,
  //   hacinamiento,
  //   condicMigrat,
  //   condicLaboral,
  //   dependientes,
  //   condicFisica,
  //   sobrevVBG,
  //   documentPosee,
  //   seguroSalud,
  //   nacionalidad,
  //   edad,
  //   horasTrabajo,
  //   famDirectos,
  //   tipoResidencia
  // }
}

export { useCriteriaVida }
