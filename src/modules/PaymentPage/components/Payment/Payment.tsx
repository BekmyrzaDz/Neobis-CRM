import React from "react"
import Header from "../Header/Header"
import styles from "./Payment.module.scss"

interface Props {}

export const Payment = (props: Props) => {
  return (
    <div className={styles.payment}>
      <Header />
    </div>
  )
}
