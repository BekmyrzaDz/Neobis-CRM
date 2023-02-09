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
    .matches(/^\d+$/, 'Число должно быть от 0 до 9'),
})

// Reset Password validation

export const ResetPasswordSchema = Yup.object({
  newPassword: Yup.string()
    .min(8, 'Пароль должен быть не менее 8 символов')
    .required('Обязательное поле'),
  newPasswordConfirmation: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    'Пароли не совпадают'
  ),
})
