import * as Yup from 'yup'

export const GroupSchema = Yup.object({
  groupName: Yup.string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
  department: Yup.string()
    .required('Обязательное поле'),
  teacher: Yup.string()
    .required('Обязательное поле'),
  room: Yup.string()
    .required('Обязательное поле'),
  studentCount: Yup.string()
    .required('Обязательное поле'),
  start: Yup.string()
    .required('Обязательное поле'),
  end: Yup.string()
    .required('Обязательное поле'),
  groupStatus: Yup.string()
    .required('Обязательное поле'),
  schedule: Yup.string()
    .required('Обязательное поле'),
  from: Yup.string()
    .nullable()
    .matches(/^\d{2}:\d{2}$/, 'Введите верное время')
    .required('Обязательное поле'),
  till: Yup.string()
    .nullable()
    .matches(/^\d{2}:\d{2}$/, 'Введите верное время')
    .required('Обязательное поле'),
})
