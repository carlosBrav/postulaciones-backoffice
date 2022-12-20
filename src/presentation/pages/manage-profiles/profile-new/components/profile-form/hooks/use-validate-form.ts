import * as yup from 'yup'

export const validateProfileForm = yup
.object()
.shape({
  nombre: yup
    .string()
    .required('Nombre requerido'),
})
.required()