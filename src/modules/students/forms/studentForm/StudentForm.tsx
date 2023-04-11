import { Formik, Form } from 'formik'
import Input from '../../../../components/Input/MyInput'
import { StudentSchema } from '../../schema/studentSchema'
import MySelect from '../../../../components/Select/MySelect'
import MyTextarea from '../../../../components/Textarea/MyTextarea'
import IconButton from '../../../../components/iconButton/IconButton'
import {
  departments,
  laptop,
  payment_status,
  came_from,
} from '../../selectOptions/studentFormOptions'

import styles from './StudentForm.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import {
  createStudentOnStudy,
  getDepartmentFilters,
  getStudentsOnStudy,
} from '../../redux/asyncActions'
import { Dispatch, FC, SetStateAction } from 'react'

interface IInitialValues {
  first_name: string
  last_name: string
  surname: string
  phone: string
  came_from: string
  department: string
  laptop: boolean
  notes: string
  payment_status: number
}

interface StudentFormProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
  departmentFilter: string
}

const StudentForm: FC<StudentFormProps> = ({
  setModalActive,
  departmentFilter,
}) => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector((state) => state.auth)
  const token = auth.user?.access!

  const initialValues: IInitialValues = {
    first_name: '',
    last_name: '',
    surname: '',
    phone: '',
    came_from: '',
    department: '',
    laptop: true,
    notes: '',
    payment_status: 1,
  }

  const onSubmit = async (values: IInitialValues) => {
    const {
      first_name,
      last_name,
      surname,
      phone,
      came_from,
      department,
      laptop,
      notes,
      payment_status,
    } = values
    try {
      await dispatch(
        createStudentOnStudy({
          token,
          first_name,
          last_name,
          surname,
          phone,
          came_from: { name: came_from },
          department: { name: department },
          on_request: false,
          is_archive: false,
          blacklist: false,
          laptop: Boolean(laptop),
          notes,
          payment_status: +payment_status,
        })
      )
      await dispatch(getStudentsOnStudy({ token, departmentFilter }))
      await dispatch(getDepartmentFilters(token))

      setModalActive(false)
    } catch (error) {}
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={StudentSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.header}>
          <h3>Карточка студента</h3>
        </div>
        <MySelect
          label='Департамент*'
          id='department'
          name='department'
          options={departments}
          className={styles.depart}
        />
        <div className={styles.rowWrapper}>
          <Input
            label='Имя*'
            id='first_name'
            name='first_name'
            type='text'
            placeholder='Имя'
          />
          <Input
            label='Фамилия*'
            id='last_name'
            name='last_name'
            type='text'
            placeholder='Фамилия'
          />
        </div>
        <div className={styles.rowWrapper}>
          <Input
            label='Отчество*'
            id='surname'
            name='surname'
            type='text'
            placeholder='Отчество'
          />
          <Input
            label='Номер телефона*'
            id='phone'
            name='phone'
            type='text'
            placeholder='+996'
          />
        </div>
        <div className={styles.rowWrapper}>
          <MySelect
            label='Источник*'
            id='came_from'
            name='came_from'
            options={came_from}
          />
          <MySelect
            label='Наличие ноутбука*'
            id='laptop'
            name='laptop'
            options={laptop}
            className={styles.laptop}
          />
        </div>
        <MyTextarea
          label='Заметки'
          id='notes'
          name='notes'
          className={styles.notes}
        />
        <div className={styles.rowWrapper}>
          <MySelect
            label='Статус оплаты'
            id='payment_status'
            name='payment_status'
            options={payment_status}
          />
        </div>
        <div className={styles.btns}>
          <IconButton text={'Сохранить изменения'} type={'submit'} />
        </div>
      </Form>
    </Formik>
  )
}

export default StudentForm
