import React from 'react'
import { Login } from '../../modules/Auth'
import logo from '../../assets/images/logo.svg'
import loginImg from '../../modules/Auth/assets/login-img.svg'
import styles from './AuthPage.module.scss'

const AuthPage = () => {
  return (
    <section className={styles.login}>
      <div className={styles.loginContent}>
        <div className={styles.logo}>
          <img className={styles.logoItem} src={logo} alt='' />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.img}>
            <img className={styles.imgItem} src={loginImg} alt='' />
          </div>

          <Login />
        </div>
      </div>
    </section>
  )
}

export default AuthPage
