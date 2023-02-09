import { Formik, Form } from 'formik'

import styles from './index.module.scss'
import AuthButton from '../../components/button'
import Input from '../../components/input'
import { VerificationSchema } from '../../schema/validation'
import { verificationState } from '../../state/state'
import LockSvg from '../../assets/lock.svg'

const Verification = () => {
  return (
    <Formik
      initialValues={verificationState}
      validationSchema={VerificationSchema}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className={styles.wrapper}>
        <h2 className={styles.title}>Проверка</h2>
        <span className={styles.descr}>Введите код, отправленный на почту</span>
        <Input
          className={styles.input}
          name='code'
          id='code'
          type='password'
          placeholder='Введите код'
          icon={LockSvg}
        />
        <AuthButton type='submit' className={styles.button}>
          Подтвердить
        </AuthButton>
      </Form>
    </Formik>
  )
}

export default Verification
