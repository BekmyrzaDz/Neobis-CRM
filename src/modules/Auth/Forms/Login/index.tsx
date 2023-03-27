import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'
import { LoginSchema } from '../../schema/validation'
import { loginState } from '../../state/state'
import MailSvg from '../../assets/mail.svg'
import LockSvg from '../../assets/lock.svg'
import Show from '../../assets/show.png'
import Hide from '../../assets/hide.png'
import AuthButton from '../../components/button'
import Input from '../../components/input'
import { useAppDispatch } from '../../../../hooks/redux'
import { login } from '../../redux/asyncActions'
import { ILogin } from '../../types'
import { useState } from 'react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => setShowPassword(!showPassword)
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
          type={showPassword ? 'text' : 'password'}
          placeholder='Пароль'
          icon={LockSvg}
          passwordIcon={showPassword ? Show : Hide}
          toggleShowPassword={toggleShowPassword}
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
