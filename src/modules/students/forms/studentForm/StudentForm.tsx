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
  paymantStatus,
  source,
  status,
} from '../../selectOptions/studentFormOptions'

import styles from './StudentForm.module.scss'

const StudentForm = () => {
  return (
    <Formik
      initialValues={{
        department: '',
        firstName: '',
        lastName: '',
        patronymic: '',
        phone: '',
        source: '',
        laptop: '',
        notes: '',
        status: '',
        paymantStatus: '',
      }}
      validationSchema={StudentSchema}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className={styles.form}>
        <div className={styles.header}>
          <div className={styles.left}>
            <h3>Карточка студента</h3>
            <span>ID654789</span>
          </div>

          <IconButton
            text={'Архивировать'}
            icon={busketIcon}
            className={styles.archiveBtn}
            type={'button'}
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
            id='firstName'
            name='firstName'
            type='text'
            placeholder='Имя'
          />
          <Input
            label='Фамилия*'
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Фамилия'
          />
        </div>
        <div className={styles.rowWrapper}>
          <Input
            label='Отчество*'
            id='patronymic'
            name='patronymic'
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
            id='source'
            name='source'
            options={source}
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
            label='Статус обучения*'
            id='status'
            name='status'
            options={status}
          />
          <MySelect
            label='Статус оплаты'
            id='paymantStatus'
            name='paymantStatus'
            options={paymantStatus}
          />
        </div>
        <div className={styles.btns}>
          <IconButton text={'Сохранить изменения'} type={'submit'} />
          <IconButton
            text={'Удалить студента'}
            icon={deleteIcon}
            className={styles.deleteBtn}
            type={'button'}
          />
          <IconButton
            text={'Добавить в черный список'}
            icon={blackListIcon}
            className={styles.blackListBtn}
            type={'button'}
          />
        </div>
      </Form>
    </Formik>
  )
}

export default StudentForm
