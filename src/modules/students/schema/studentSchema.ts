import * as Yup from 'yup'

export const StudentSchema = Yup.object({
  department: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  firstName: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  lastName: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  patronymic: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  phone: Yup.string()
    .nullable()
    .matches(/^\+996\d{9}$/, 'Введите верный номер')
    .required('Обязательное поле'),
  source: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  laptop: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  paymantStatus: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
})
