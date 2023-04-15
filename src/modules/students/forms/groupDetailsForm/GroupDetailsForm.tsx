import { Formik, Form } from 'formik'
import Input from '../../../../components/Input/MyInput'
import MySelect from '../../../../components/Select/MySelect'
import IconButton from '../../../../components/iconButton/IconButton'
import busketIcon from '../../assets/icons/busket.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import {
  departments,
  classrooms,
  schedule_types,
  mentors,
} from '../../selectOptions/groupFormOptions'
import { GroupSchema } from '../../schema/groupSchema'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'

import styles from './GroupDetailsForm.module.scss'
import {
  deleteGroupOnStudyById,
  editGroupOnStudyById,
  getGroupOnStudyById,
} from '../../redux/groups/asyncActions'
import { useParams } from 'react-router-dom'
import StudentFormSkeleton from '../../components/skeleton/StudentFormSkeleton'

interface GroupDetailsFormProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
}

interface IInitialValues {
  name: string
  department: string
  mentor: number
  classroom: string
  students_max: number
  start_at_date: string
  end_at_date: string
  schedule_type: number
  start_at_time: string
  end_at_time: string
}

const GroupDetailsForm: FC<GroupDetailsFormProps> = ({ setModalActive }) => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const token = useAppSelector((state) => state.auth.user?.access!)
  const group = useAppSelector((state) => state.groupsOnStudy.groupOnStudy!)
  const { isLoading } = useAppSelector((state) => state.groupsOnStudy)

  const initialValues: IInitialValues = {
    name: group?.name ?? '',
    department: group?.department?.name ?? '',
    mentor: group?.mentor?.id ?? '',
    classroom: group?.classroom?.name ?? '',
    students_max: group?.students_max ?? '',
    start_at_date: group?.start_at_date ?? '',
    end_at_date: group?.end_at_date ?? '',
    schedule_type: group?.schedule_type ?? '',
    start_at_time: group?.start_at_time ?? '',
    end_at_time: group?.end_at_time ?? '',
  }

  useEffect(() => {
    dispatch(getGroupOnStudyById({ token, id }))
  }, [])

  const onSubmit = (values: IInitialValues) => {
    const {
      name,
      department,
      mentor,
      classroom,
      students_max,
      start_at_date,
      end_at_date,
      schedule_type,
      start_at_time,
      end_at_time,
    } = values

    if (id !== undefined) {
      dispatch(
        editGroupOnStudyById({
          token,
          id,
          name,
          department: {
            name: department,
          },
          mentor: {
            id: mentor,
          },
          classroom: {
            name: classroom,
          },
          is_archive: false,
          students_max,
          start_at_date,
          end_at_date,
          schedule_type,
          start_at_time,
          end_at_time,
        })
      )
    }

    setModalActive(false)
  }

  const onArchive = (values: IInitialValues) => {
    const {
      name,
      department,
      mentor,
      classroom,
      students_max,
      start_at_date,
      end_at_date,
      schedule_type,
      start_at_time,
      end_at_time,
    } = values

    if (window.confirm(`Вы действительно хотите архивировать ${name}?`)) {
      if (id !== undefined) {
        dispatch(
          editGroupOnStudyById({
            token,
            id,
            name,
            department: {
              name: department,
            },
            mentor: {
              id: mentor,
            },
            classroom: {
              name: classroom,
            },
            is_archive: true,
            students_max,
            start_at_date,
            end_at_date,
            schedule_type,
            start_at_time,
            end_at_time,
          })
        )
      }

      setModalActive(false)
    }
  }

  const onDelete = (values: IInitialValues) => {
    const { name } = values

    if (window.confirm(`Вы действительно хотите удалить ${name}?`)) {
      if (id !== undefined) {
        dispatch(deleteGroupOnStudyById({ token, id }))
      }

      setModalActive(false)
    }
  }

  if (isLoading) {
    return <StudentFormSkeleton />
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={GroupSchema}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.header}>
          <div className={styles.left}>
            <h3>Карточка группы</h3>
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
        <Input
          label='Название группы*'
          id='name'
          name='name'
          type='text'
          placeholder='Название группы'
          className={styles.name}
        />
        <MySelect
          label='Департамент*'
          id='department'
          name='department'
          options={departments}
          className={styles.depart}
        />
        <MySelect
          label='Преподователь*'
          id='mentor'
          name='mentor'
          options={mentors}
          className={styles.mentor}
        />
        <div className={styles.rowWrapper}>
          <MySelect
            label='Аудитория*'
            id='classroom'
            name='classroom'
            options={classrooms}
          />
          <Input
            label='Кол-во студентов*'
            id='students_max'
            name='students_max'
            type='text'
            placeholder='0'
            className={styles.halfDiv}
          />
        </div>
        <div className={styles.rowWrapper}>
          <Input
            label='Старт курса*'
            id='start_at_date'
            name='start_at_date'
            type='date'
            className={styles.twoInOne}
          />
          <Input
            label='Конец курса*'
            id='end_at_date'
            name='end_at_date'
            type='date'
            className={styles.twoInOne}
          />
        </div>
        <div className={styles.rowWrapper}>
          <MySelect
            label='Расписание*'
            id='schedule_type'
            name='schedule_type'
            options={schedule_types}
          />
          <Input
            label='От*'
            id='start_at_time'
            name='start_at_time'
            type='text'
            placeholder='00:00'
            className={styles.twoInOne}
          />
          <Input
            label='До*'
            id='end_at_time'
            name='end_at_time'
            type='text'
            placeholder='00:00'
            className={styles.twoInOne}
          />
        </div>
        <div className={styles.btns}>
          <IconButton text={'Сохранить изменения'} type={'submit'} />
          <IconButton
            text={'Удалить группу'}
            icon={deleteIcon}
            className={styles.deleteBtn}
            type={'button'}
            onClick={() => onDelete(initialValues)}
          />
        </div>
      </Form>
    </Formik>
  )
}

export default GroupDetailsForm
