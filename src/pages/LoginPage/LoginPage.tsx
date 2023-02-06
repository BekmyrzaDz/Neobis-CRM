import React from 'react'
import styles from './LoginPage.module.scss'

const LoginPage = () => {
  return (
    <div className='login'>
      <div className={`${styles.light} ${styles.example}`}>Light</div>
      <div className={`${styles.semilight} ${styles.example}`}>Semilight</div>
      <div className={`${styles.regular} ${styles.example}`}>Regular</div>
      <div className={`${styles.semibold} ${styles.example}`}>Semibold</div>
    </div>
  )
}

export default LoginPage
