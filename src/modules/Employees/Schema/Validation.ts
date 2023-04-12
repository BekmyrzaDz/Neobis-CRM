import * as Yup from 'yup';

// Client Schema
export const createEmployee = Yup.object().shape({
  file: Yup.mixed()
    .typeError('Где фото ?')
    .test('fileSize', 'File size is too large', (value) => {
      if (!value) return true; // if file is not uploaded, don't check size
      return value.size <= 2 * 1024 * 1024; // 2 MB
    })
    .test('fileType', 'File type is not supported', (value) => {
      if (!value) return true; // if file is not uploaded, don't check type
      return ['image/png', 'image/jpeg'].includes(value.type); // PNG or JPG
    }),
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
  department: Yup.object().shape({
    name: Yup.string().required('Обязательное поле'),
  }),
});
