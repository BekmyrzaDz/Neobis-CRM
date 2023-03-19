import { Formik, Form } from 'formik'

import styles from './index.module.scss'
import AuthButton from '../../components/button'
import Input from '../../components/input'
import { VerificationSchema } from '../../schema/validation'
import { verificationState } from '../../state/state'
import LockSvg from '../../assets/lock.svg'
import { useAppDispatch } from '../../../../hooks/redux'
import { verification } from '../../redux/asyncActions'

const Verification = () => {
  const dispatch = useAppDispatch()

  function onSubmit(values: any) {
    const code = values.code

    const uniqueId_string = localStorage.getItem('unique_id')
    let unique_id
    if (uniqueId_string !== null) {
      unique_id = JSON.parse(uniqueId_string)
    }

    dispatch(verification({ code, unique_id }))
  }

  return (
    <Formik
      initialValues={verificationState}
      validationSchema={VerificationSchema}
      onSubmit={onSubmit}
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
