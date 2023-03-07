import * as Yup from 'yup'

// Profile Schema
export const profileSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  lastName: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  phoneNumber: Yup.string()
    .required('Обязательное поле')
    .matches(/^\+996\d{9}$/, 'Введите верный номер'),
  email: Yup.string()
    .email('Введите верную почту')
    .required('Обязательное поле'),
})
