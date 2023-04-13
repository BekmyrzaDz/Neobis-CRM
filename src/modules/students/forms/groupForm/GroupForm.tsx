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
import { Dispatch, FC, SetStateAction } from 'react'

import styles from './GroupForm.module.scss'
import {
  createGroupOnStudy,
  getAllGroups,
  getGroupDepartmentFilters,
} from '../../redux/groups/asyncActions'
import { formatDate } from '../../helpers/formatDate'

interface GroupFormProps {
  setModalActive: Dispatch<SetStateAction<boolean>>
  departmentFilter: string
}

interface IInitialValues {
  name: string
  department: string
  mentor: string
  classroom: string
  students_max: number
  start_at_date: string
  end_at_date: string
  schedule_type: number
  start_at_time: string
  end_at_time: string
}

const GroupForm: FC<GroupFormProps> = ({
  setModalActive,
  departmentFilter,
}) => {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.user?.access!)

  const onSubmit = async (values: IInitialValues) => {
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
    try {
      await dispatch(
        createGroupOnStudy({
          token,
          name,
          department: {
            name: department,
          },
          mentor: {
            id: +mentor,
          },
          classroom: {
            name: classroom,
          },
          is_archive: false,
          students_max: +students_max,
          start_at_date: formatDate(start_at_date),
          end_at_date: formatDate(end_at_date),
          schedule_type: +schedule_type,
          start_at_time,
          end_at_time,
        })
      )
      await dispatch(getAllGroups({ token, departmentFilter }))
      await dispatch(getGroupDepartmentFilters(token))

      setModalActive(false)
    } catch (error) {}
  }

  return (
    <Formik
      initialValues={{
        name: '',
        department: '',
        mentor: '',
        classroom: '',
        students_max: 12,
        start_at_date: '',
        end_at_date: '',
        schedule_type: 1,
        start_at_time: '',
        end_at_time: '',
      }}
      validationSchema={GroupSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.header}>
          <h3>Карточка группы</h3>
          <IconButton
            text={'Архивировать'}
            icon={busketIcon}
            className={styles.archiveBtn}
            type={'button'}
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
          />
        </div>
      </Form>
    </Formik>
  )
}

export default GroupForm
