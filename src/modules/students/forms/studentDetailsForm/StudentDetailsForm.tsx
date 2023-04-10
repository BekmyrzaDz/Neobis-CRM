import { Formik, Form } from 'formik'
import Input from '../../../../components/Input/MyInput'
import { StudentSchema } from '../../schema/studentSchema'
import MySelect from '../../../../components/Select/MySelect'
import MyTextarea from '../../../../components/Textarea/MyTextarea'
import IconButton from '../../../../components/iconButton/IconButton'
import busketIcon from '../../assets/icons/busket.svg'
import blackListIcon from '../../assets/icons/blackList.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import {
  departments,
  laptop,
  payment_status,
  came_from,
} from '../../selectOptions/studentFormOptions'

import styles from './StudentDetailsForm.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import {
  deleteStudentOnStudyById,
  editStudentOnStudyById,
  getStudentOnStudyById,
} from '../../redux/asyncActions'
import { useParams } from 'react-router-dom'

interface IInitialValues {
  first_name: string
  last_name: string
  surname: string
  phone: string
  came_from?: {
    id: number
    name: string
  }
  department?: {
    id: number
    name: string
  }
  laptop?: boolean
  notes?: string
  payment_status?: number
}

interface StudentDetailsFormProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
}

const StudentDetailsForm: FC<StudentDetailsFormProps> = ({
  setModalActive,
}) => {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.user?.access!)
  const { id } = useParams()
  const student = useAppSelector(
    (state) => state.studentsOnStudy.studentOnStudy!
  )

  const initialValues: IInitialValues = {
    first_name: student.first_name || '',
    last_name: student.last_name || '',
    surname: student.surname || '',
    phone: student.phone || '',
    came_from: student.came_from?.name || '',
    department: student.department?.name || '',
    laptop: student.laptop || true,
    notes: student.notes || '',
    payment_status: student.payment_status || 1,
  }

  useEffect(() => {
    dispatch(getStudentOnStudyById({ token, id }))
  }, [dispatch, token, id])

  const onSubmit = (values: IInitialValues) => {
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

    dispatch(
      editStudentOnStudyById({
        token,
        id,
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

    setModalActive(false)
  }

  const onArchive = (values: IInitialValues) => {
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

    if (
      window.confirm(
        `Вы действительно хотите архивировать ${first_name} ${last_name}?`
      )
    ) {
      dispatch(
        editStudentOnStudyById({
          token,
          id,
          first_name,
          last_name,
          surname,
          phone,
          came_from: { name: came_from },
          department: { name: department },
          on_request: false,
          is_archive: true,
          blacklist: false,
          laptop: Boolean(laptop),
          notes,
          payment_status: +payment_status,
        })
      )

      setModalActive(false)
    }
  }

  const onBlock = (values: IInitialValues) => {
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

    if (
      window.confirm(
        `Вы действительно хотите заблокировать ${first_name} ${last_name}?`
      )
    ) {
      dispatch(
        editStudentOnStudyById({
          token,
          id,
          first_name,
          last_name,
          surname,
          phone,
          came_from: { name: came_from },
          department: { name: department },
          on_request: false,
          is_archive: false,
          blacklist: true,
          laptop: Boolean(laptop),
          notes,
          payment_status: +payment_status,
        })
      )

      setModalActive(false)
    }
  }

  const onDelete = (values: IInitialValues) => {
    const { first_name, last_name } = values

    if (
      window.confirm(
        `Вы действительно хотите удалить ${first_name} ${last_name}?`
      )
    ) {
      dispatch(deleteStudentOnStudyById({ token, id }))

      setModalActive(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={StudentSchema}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.header}>
          <div className={styles.left}>
            <h3>Карточка студента</h3>
            <span>{id}</span>
          </div>

          <IconButton
            text={'Архивировать'}
            icon={busketIcon}
            className={styles.archiveBtn}
            type={'button'}
            onClick={() => onArchive(initialValues)}
          />
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
          <IconButton
            text={'Удалить студента'}
            icon={deleteIcon}
            className={styles.deleteBtn}
            type={'button'}
            onClick={() => onDelete(initialValues)}
          />
          <IconButton
            text={'Добавить в черный список'}
            icon={blackListIcon}
            className={styles.blackListBtn}
            type={'button'}
            onClick={() => onBlock(initialValues)}
          />
        </div>
      </Form>
    </Formik>
  )
}

export default StudentDetailsForm
