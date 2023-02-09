import { Formik, Form } from 'formik'

import styles from './index.module.scss'
import AuthButton from '../../components/button'
import Input from '../../components/input'
import { ResetPasswordSchema } from '../../schema/validation'
import { resetPassword } from '../../state/state'
import LockSvg from '../../assets/lock.svg'

const ResetPassword = () => {
  return (
    <Formik
      initialValues={resetPassword}
      validationSchema={ResetPasswordSchema}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className={styles.wrapper}>
        <h2 className={styles.title}>Создание нового пароля</h2>
        <span className={styles.descr}>Придумайте новый пароль</span>
        <Input
          className={styles.input}
          name='newPassword'
          id='newPassword'
          type='password'
          placeholder='Новый пароль'
          icon={LockSvg}
        />
        <Input
          className={styles.secondInput}
          name='newPasswordConfirmation'
          id='newPasswordConfirmation'
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
