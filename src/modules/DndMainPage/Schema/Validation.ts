import * as Yup from 'yup'

// Client Schema
export const clientSchema = Yup.object().shape({
  first_name: Yup.string()
    .typeError('Должно быть строкой')
    .min(2, 'Минимум 2 символа')
    .max(30, 'Максимум 30 символа')
    .required('Обязательное поле'),
  last_name: Yup.string()
  .typeError('Должно быть строкой')
    .min(2, 'Минимум 2 символа')
    .max(30, 'Максимум 30 символа')
    .required('Обязательное поле'),
  surname: Yup.string()
  .typeError('Должно быть строкой')
    .min(2, 'Минимум 2 символа')
    .max(30, 'Максимум 30 символа'),
  phone: Yup.string()
    .nullable()
    .matches(/^\+996\d{9}$/, 'Введите верный номер')
    .required('Обязательное поле'),
  notes: Yup.string()
  .typeError('Должно быть строкой')
    .min(2, 'Минимум 2 символа')
    .max(200, 'Максимум 200 символа'),
  laptop: Yup.string().required('Обязательное поле'),
  department: Yup.object().shape({
    name: Yup.string().required('Обязательное поле')
  }),
  came_from: Yup.object().shape({
    name: Yup.string().required('Обязательное поле'),
  }),
  payment_method: Yup.object().shape({
    name: Yup.string().required('Обязательное поле'),
  }),
})