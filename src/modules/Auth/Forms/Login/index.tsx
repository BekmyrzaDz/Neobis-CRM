import { Formik, Form } from 'formik'

import styles from './index.module.scss'
import { LoginSchema } from '../../schema/validation'
import { loginState } from '../../state/state'
import MailSvg from '../../assets/mail.svg'
import LockSvg from '../../assets/lock.svg'
import { Link } from 'react-router-dom'
import AuthButton from '../../components/button'
import Input from '../../components/input'

const Login = () => {
  return (
    <Formik
      initialValues={loginState}
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
        <Link to='/forgot-password' className={styles.forgotPass}>
          Забыли пароль?
        </Link>
      </Form>
    </Formik>
  )
}

export default Login
