import * as yup from 'yup'

export const validateProjectForm = yup
  .object()
  .shape({
    idEstado: yup.string().required('Estado es requerido'),
    codigo: yup.string().required('Código es requerido'),
    nombre: yup.string().required('Nombre es requerido'),
    descripcion: yup.string().required('Descripción es requerido'),
    jefe: yup.string().required('Nombre de jefe es requerido'),
    terminos: yup.string().required('Términos es requerido'),
    flagLanding: yup.boolean().required('Flag es requerido'),
    landing: yup.string().required('Landing es requerido')
  })
  .required()
