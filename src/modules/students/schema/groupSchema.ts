import * as Yup from 'yup'

export const GroupSchema = Yup.object({
  name: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
  department: Yup.string().required('Обязательное поле'),
  mentor: Yup.string().required('Обязательное поле'),
  classroom: Yup.string().required('Обязательное поле'),
  students_max: Yup.string().required('Обязательное поле'),
  start_at_date: Yup.string().required('Обязательное поле'),
  end_at_date: Yup.string().required('Обязательное поле'),
  schedule_type: Yup.string().required('Обязательное поле'),
  start_at_time: Yup.string()
    .nullable()
    .matches(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, 'Введите верное время')
    .required('Обязательное поле'),
  end_at_time: Yup.string()
    .nullable()
    .matches(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, 'Введите верное время')
    .required('Обязательное поле'),
})
