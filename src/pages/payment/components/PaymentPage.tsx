import React from "react"
import Payment from "../../../modules/PaymentPage"
import styles from "./PaymentPage.module.scss"
import { useAppSelector } from "../../../hooks/redux"
import Spinner from "../../../components/spinner/spinner"

type Props = {}

const PaymentPage = (props: Props) => {
  const { isLoading } = useAppSelector((state) => state?.singelClient)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className={styles.paymentPage}>
      <Payment />
    </div>
  )
}

export default PaymentPage
