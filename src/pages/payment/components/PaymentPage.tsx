import React from "react"
import Payment from "../../../modules/PaymentPage"
import styles from "./PaymentPage.module.scss"

type Props = {}

const PaymentPage = (props: Props) => {
  return (
    <div className={styles.paymentPage}>
      <Payment />
    </div>
  )
}

export default PaymentPage
