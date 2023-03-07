import { Formik, Form } from 'formik'

import styles from './index.module.scss'
import AuthButton from '../../components/button'
import Input from '../../components/input'
import { ForgotPasswordSchema } from '../../schema/validation'
import { forgotPasswordState } from '../../state/state'
import MailSvg from '../../assets/mail.svg'
import { useAppDispatch } from '../../../../hooks/redux'
import { resetPassword } from '../../redux/asyncActions'
import { IForgotPassword } from '../../types'

const ForgotPassword = () => {
  const dispatch = useAppDispatch()

  function onSubmit(values: IForgotPassword) {
    dispatch(resetPassword(values))
  }

  return (
    <Formik
      initialValues={forgotPasswordState}
      validationSchema={ForgotPasswordSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.wrapper}>
        <h2 className={styles.title}>Забыли пароль?</h2>
        <span className={styles.descr}>Введите вашу электронную почту</span>
        <Input
          className={styles.input}
          name='email'
          id='email'
          type='email'
          placeholder='Электронная почта'
          icon={MailSvg}
        />
        <AuthButton type='submit' className={styles.button}>
          Получить код
        </AuthButton>
      </Form>
    </Formik>
  )
}

export default ForgotPassword
