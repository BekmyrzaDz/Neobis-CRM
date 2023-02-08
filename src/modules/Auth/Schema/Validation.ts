import * as Yup from 'yup'

// Login Schema
export const LoginSchema = Yup.object({
  email: Yup.string()
    .email('Введите верную почту')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(8, 'Пароль должен быть не менее 8 символов')
    .required('Обязательное поле'),
})
