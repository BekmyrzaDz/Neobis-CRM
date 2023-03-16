import { Formik, Form } from 'formik'
import { profileSchema } from '../../schema'
import ProfileInput from '../../components/input'
import Button from '../../../../components/button'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { IProfileFormikState } from '../../types'
import { updateProfile } from '../../redux/asyncActions'

import styles from './index.module.scss'

const ProfileForm = () => {
  const dispatch = useAppDispatch()
  const { first_name, last_name, email, phone } = useAppSelector(
    (state) => state.profile.profile
  ) ?? { first_name: '', last_name: '', email: '', phone: '' }
  const id = useAppSelector((state) => state.auth.user?.id) as number

  const onUpdate = (values: IProfileFormikState) => {
    const { first_name, last_name, phone } = values
    const profileData = {
      first_name,
      last_name,
      phone,
    }

    dispatch(updateProfile({ id, profileData }))
  }

  return (
    <Formik
      initialValues={{
        first_name,
        last_name,
        email,
        phone,
      }}
      enableReinitialize={true}
      validationSchema={profileSchema}
      onSubmit={onUpdate}
    >
      <Form className={styles.wrapper}>
        <div className={styles.firstCol}>
          <div className={styles.firstName}>
            <ProfileInput
              label='Имя'
              name='first_name'
              id='first_name'
              type='text'
            />
          </div>

          <div className={styles.phoneNumber}>
            <ProfileInput
              label='Номер телефона'
              name='phone'
              id='phone'
              type='text'
              placeholder='+996'
            />
          </div>
        </div>

        <div className={styles.secondCol}>
          <div className={styles.secondName}>
            <ProfileInput
              label='Фамилия'
              name='last_name'
              id='last_name'
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
