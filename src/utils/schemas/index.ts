import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('Informe o e-email'),
  password: yup.string().required('Informe a senha'),
});
