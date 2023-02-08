import { Formik, Form } from 'formik'

import styles from './index.module.scss'
import AuthButton from '../../components/Button'
import Input from '../../components/Input'
import { LoginSchema } from '../../Schema/Validation'
import { initialState } from '../../State/state'
import MailSvg from '../../assets/mail.svg'
import LockSvg from '../../assets/lock.svg'

const Login = () => {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={LoginSchema}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className={styles.wrapper}>
        <h2 className={styles.title}>Вход в аккаунт</h2>
        <Input
          className={styles.input}
          name='email'
          id='email'
          type='email'
          placeholder='Электронная почта'
          icon={MailSvg}
        />
        <Input
          className={styles.passInput}
          name='password'
          id='password'
          type='password'
          placeholder='Пароль'
          icon={LockSvg}
        />
        <AuthButton type='submit' className={styles.button}>
          Войти
        </AuthButton>
        <a href='#' className={styles.forgotPass}>
          Забыли пароль?
        </a>
      </Form>
    </Formik>
  )
}

export default Login
