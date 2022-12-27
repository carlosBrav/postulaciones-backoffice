import useCriteria from '@main/adapters/parameter/use-criteria'
import { TYPE_PARAMETER, TYPE_CALCULO } from '@domain/parameter/constants'
import { ParameterRepository } from '@domain/parameter'
import { useContext, useEffect, useState } from 'react'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'
import { Selector } from '@domain/common/model/selector'

function useCriteriaGeneral() {
  const { type_document } = useContext(ParameterManageContext)

  // useEffect(() => {
  //   if (id) {
  //     editValues()
  //   }
  // }, [id])

  return {
    type_document
  }
}

export { useCriteriaGeneral }
