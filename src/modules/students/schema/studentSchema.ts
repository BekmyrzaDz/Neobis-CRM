import * as Yup from 'yup'

export const StudentSchema = Yup.object({
  department: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  first_name: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  last_name: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  group: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  phone: Yup.string()
    .nullable()
    .matches(/^\+996\d{9}$/, 'Введите верный номер')
    .required('Обязательное поле'),
  came_from: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  laptop: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  payment_status: Yup.number().required('Обязательное поле'),
})
