import * as yup from 'yup'

export const validateUserForm = yup
.object()
.shape({
  idTipDoc: yup
    .string()
    .required('Tipo de documento requerido'),
    idPerfil: yup
    .string()
    .required('Perfil requerido'),
    numDoc: yup
    .string()
    .required('Número de documento requerido'),
    codigo: yup
    .string()
    .required('Código requerido'),
    nombre: yup
    .string()
    .required('Nombre requerido'),
    apePat: yup
    .string()
    .required('Apellido Paterno requerido'),
    apeMat: yup
    .string()
    .required('Apellido Materno requerido'),
    email: yup
    .string()
    .email()
    .required('Correo requerido'),
    celular: yup.string().required('Celular requerido'),
    login: yup.string().required('Usuario requerido'),
    clave: yup.string().required('Clave requerida'),
    file: yup.mixed(),
    file_string: yup.string().required('Imagen requerida')
  
})
.required()