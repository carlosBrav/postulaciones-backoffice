import * as yup from 'yup'

export const validationFormLogin = yup
  .object()
  .shape({
    document_type: yup.string().required('Tipo de documento requerido'),
    document_number: yup.string().required('Documento requerido'),
    password: yup.string().required('Clave requerida')
  })
  .required()
