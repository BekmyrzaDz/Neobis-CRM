import * as Yup from 'yup'

// Profile Schema
export const profileSchema = Yup.object({
  first_name: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  last_name: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  phone: Yup.string()
    .nullable()
    .matches(/^\+996\d{9}$/, 'Введите верный номер'),
  email: Yup.string()
    .email('Введите верную почту')
    .required('Обязательное поле'),
})
