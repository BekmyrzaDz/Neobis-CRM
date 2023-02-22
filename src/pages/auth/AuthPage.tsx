import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import loginImg from '../../modules/Auth/assets/login-img.svg'
import {
  renderAuthForm,
  TLocation,
} from '../../modules/auth/helpers/renderAuthForm'
import styles from './AuthPage.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import Spinner from '../../components/spinner/spinner'
import { reset } from '../../modules/auth/redux/authSlice'

const AuthPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const dispatch = useAppDispatch()
  const { isLoading, isSuccess } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (isSuccess && currentPath === '/') {
      navigate('/home-page')
      dispatch(reset())
    }

    if (isSuccess && currentPath === '/forgot-password') {
      navigate('/verification')
      dispatch(reset())
    }
  }, [isSuccess, currentPath])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className={styles.login}>
      <div className={styles.loginContent}>
        <div className={styles.logo}>
          <img className={styles.logoItem} src={logo} alt='logo' />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.img}>
            <img className={styles.imgItem} src={loginImg} alt='login-img' />
          </div>

          {renderAuthForm(currentPath as TLocation)}
        </div>
      </div>
    </section>
  )
}

export default AuthPage
