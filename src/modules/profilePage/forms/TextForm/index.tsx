import { Formik, Form } from 'formik'
import { profileState } from '../../state'
import { profileSchema } from '../../schema'
import ProfileInput from '../../components/input'
import Button from '../../../../components/button'

import styles from './index.module.scss'

const ProfileForm = () => {
  return (
    <Formik
      initialValues={profileState}
      validationSchema={profileSchema}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className={styles.wrapper}>
        <div className={styles.firstCol}>
          <div className={styles.firstName}>
            <ProfileInput
              label='Имя'
              name='firstName'
              id='firstName'
              type='text'
            />
          </div>

          <div className={styles.phoneNumber}>
            <ProfileInput
              label='Номер телефона'
              name='phoneNumber'
              id='phoneNumber'
              type='text'
              placeholder='+996'
            />
          </div>
        </div>

        <div className={styles.secondCol}>
          <div className={styles.secondName}>
            <ProfileInput
              label='Фамилия'
              name='lastName'
              id='lastName'
              type='text'
            />
          </div>

          <div className={styles.email}>
            <ProfileInput
              label='Электронная почта'
              name='email'
              id='email'
              type='text'
              className={styles.emailInput}
              disabled
            />
          </div>

          <Button type='submit' className={styles.button}>
            Изменить данные
          </Button>
        </div>
      </Form>
    </Formik>
  )
}

export default ProfileForm
