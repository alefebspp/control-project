import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Um email é necessário!'),
  password: yup.string().required('Uma senha é necessária!'),
});

export const requestSchema = yup.object({
  reason: yup.string().required('Um motivo é obrigatório'),
});
