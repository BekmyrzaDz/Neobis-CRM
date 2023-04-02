import { Formik, Form } from 'formik'
import Input from '../../../../components/Input/MyInput'
import MySelect from '../../../../components/Select/MySelect'
import IconButton from '../../../../components/iconButton/IconButton'
import busketIcon from '../../assets/icons/busket.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import {
  departments,
  groupStatus,
  rooms,
  schedules,
  teachers,
} from '../../selectOptions/groupFormOptions'
import { GroupSchema } from '../../schema/groupSchema'

import styles from './GroupForm.module.scss'

const GroupForm = () => {
  return (
    <Formik
      initialValues={{
        groupName: '',
        department: '',
        teacher: '',
        room: '',
        studentCount: '',
        start: '',
        end: '',
        groupStatus: '',
        schedule: '',
        from: '',
        till: '',
      }}
      validationSchema={GroupSchema}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
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
          id='groupName'
          name='groupName'
          type='text'
          placeholder='Название группы'
          className={styles.groupName}
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
          id='teacher'
          name='teacher'
          options={teachers}
          className={styles.teacher}
        />
        <div className={styles.rowWrapper}>
          <MySelect label='Аудитория*' id='room' name='room' options={rooms} />
          <Input
            label='Кол-во студентов*'
            id='studentCount'
            name='studentCount'
            type='text'
            placeholder='0'
            className={styles.halfDiv}
          />
        </div>
        <div className={styles.rowWrapper}>
          <Input
            label='Старт курса*'
            id='start'
            name='start'
            type='date'
            className={styles.twoInOne}
          />
          <Input
            label='Конец курса*'
            id='end'
            name='end'
            type='date'
            className={styles.twoInOne}
          />
          <MySelect
            label='Статус группы*'
            id='groupStatus'
            name='groupStatus'
            options={groupStatus}
          />
        </div>
        <div className={styles.rowWrapper}>
          <MySelect
            label='Расписание*'
            id='schedule'
            name='schedule'
            options={schedules}
          />
          <Input
            label='От*'
            id='from'
            name='from'
            type='text'
            placeholder='00:00'
            className={styles.twoInOne}
          />
          <Input
            label='До*'
            id='till'
            name='till'
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
