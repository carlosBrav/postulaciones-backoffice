import * as yup from 'yup'

export const validateProjectForm = yup
  .object()
  .shape({
    idEstado: yup.string().required('Estado es requerido'),
    codigo: yup.string().required('Código es requerido'),
    nombre: yup.string().required('Nombre es requerido'),
    descripcion: yup.string(),
    jefe: yup.string().required('Nombre de jefe es requerido'),
    flagLanding: yup.boolean()
  })
  .required()
