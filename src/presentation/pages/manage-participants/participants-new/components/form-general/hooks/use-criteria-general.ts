import useCriteria from '@main/adapters/parameter/use-criteria'
import { TYPE_PARAMETER, TYPE_CALCULO } from '@domain/parameter/constants'
import { ParameterRepository } from '@domain/parameter'
import { useContext, useEffect } from 'react'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { Selector } from '@domain/common/model/selector'

function useCriteriaGeneral(repository: ParameterRepository) {
  const {
    isLoading: isLoadingEdad,
    isSuccess: isSuccessEdad,
    data: dataEdad
  } = useCriteria(TYPE_CALCULO.salud, TYPE_PARAMETER.edad, repository)
  const { edad, setEdad } = useContext(ParameterManageContext)

  useEffect(() => {
    if (isSuccessEdad && dataEdad && dataEdad?.length > 0) {
      setEdad(
        dataEdad.map((val) =>
          Selector.fromJson({ value: val.codigo, label: val.descripcion })
        )
      )
    }
  }, [isSuccessEdad, dataEdad])

  return {
    edad,
    isLoadingEdad
  }
}

export { useCriteriaGeneral }
