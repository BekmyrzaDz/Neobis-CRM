import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'
import { LoginSchema } from '../../schema/validation'
import { loginState } from '../../state/state'
import MailSvg from '../../assets/mail.svg'
import LockSvg from '../../assets/lock.svg'
import AuthButton from '../../components/button'
import Input from '../../components/input'
import { useAppDispatch } from '../../../../hooks/redux'
import { login } from '../../redux/asyncActions'
import { ILogin } from '../../types'

const Login = () => {
  const dispatch = useAppDispatch()

  function onSubmit(values: ILogin) {
    dispatch(login(values))
  }

  return (
    <Formik
      initialValues={loginState}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
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
