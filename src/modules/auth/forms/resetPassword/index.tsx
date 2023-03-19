import { Formik, Form } from 'formik'

import styles from './index.module.scss'
import AuthButton from '../../components/button'
import Input from '../../components/input'
import { ResetPasswordSchema } from '../../schema/validation'
import { resetPassword } from '../../state/state'
import LockSvg from '../../assets/lock.svg'
import { useAppDispatch } from '../../../../hooks/redux'
import { setNewPassword } from '../../redux/asyncActions'

const ResetPassword = () => {
  const dispatch = useAppDispatch()

  function onSubmit(values: any) {
    console.log(values)

    const password = values.password
    const repeat_password = values.repeat_password

    const uniqueId_string = localStorage.getItem('unique_id')
    let unique_id
    if (uniqueId_string !== null) {
      unique_id = JSON.parse(uniqueId_string)
    }

    dispatch(setNewPassword({ password, repeat_password, unique_id }))
  }

  return (
    <Formik
      initialValues={resetPassword}
      validationSchema={ResetPasswordSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.wrapper}>
        <h2 className={styles.title}>Создание нового пароля</h2>
        <span className={styles.descr}>Придумайте новый пароль</span>
        <Input
          className={styles.input}
          name='password'
          id='password'
          type='password'
          placeholder='Новый пароль'
          icon={LockSvg}
        />
        <Input
          className={styles.secondInput}
          name='repeat_password'
          id='repeat_password'
          type='password'
          placeholder='Повторите пароль'
          icon={LockSvg}
        />
        <AuthButton type='submit' className={styles.button}>
          Создать
        </AuthButton>
      </Form>
    </Formik>
  )
}

export default ResetPassword
