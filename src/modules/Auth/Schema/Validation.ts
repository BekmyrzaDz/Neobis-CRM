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

// Forgot Password Schema
export const ForgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email('Введите верную почту')
    .required('Обязательное поле'),
})

// Verification Schema
export const VerificationSchema = Yup.object({
  code: Yup.string()
    .required('Обязательное поле')
    .min(6, 'Код должен быть не менее 6 символов'),
})

// Reset Password validation

export const ResetPasswordSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Пароль должен быть не менее 8 символов')
    .required('Обязательное поле'),
  repeat_password: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Пароли не совпадают'
  ),
})
