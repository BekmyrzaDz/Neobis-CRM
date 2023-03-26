import * as Yup from 'yup'

// Profile Schema
export const addClientSchema = Yup.object().shape({
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
    .max(30, 'Максимум 30 символа')
    .required('Обязательное поле'),
  phone: Yup.string()
    .nullable()
    .matches(/^\+996\d{9}$/, 'Введите верный номер'),
  notes: Yup.string()
  .typeError('Должно быть строкой')
    .min(2, 'Минимум 2 символа')
    .max(200, 'Максимум 200 символа')
    .required('Обязательное поле'),
  // laptop: Yup.boolean().required('Обязательное поле'),
  department: Yup.object().shape({
    name: Yup.string()
    .transform((value, originalValue) => originalValue.trim() === "" ? null: value)
    .nullable()
  }),
  came_from: Yup.object().shape({
    name: Yup.string()    
    .transform((value, originalValue) => originalValue.trim() === "" ? null: value)
    .nullable()
  }),
  payment_method: Yup.object().shape({
    name: Yup.string()    
    .transform((value, originalValue) => originalValue.trim() === "" ? null: value)
    .nullable()
  }),
})