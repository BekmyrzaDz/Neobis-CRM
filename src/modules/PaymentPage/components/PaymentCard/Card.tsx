import React, { FC } from "react"
import { cash, creditCard, optima } from "../../assets/index"
import styles from "./Card.module.scss"

interface IPaymentMethod {
  id: number
  logo: string
  paymentType: string
  paymentTypeImg: string
  cardNumber: number
  first_name: string
  last_name: string
  limit?: string
  cardTypeImg?: string
}

const Card: FC<IPaymentMethod> = ({
  paymentType,
  paymentTypeImg,
  cardNumber,
  first_name,
  last_name,
  limit,
  logo,
  cardTypeImg,
}) => {
  const cardArr: string[] = cardNumber.toString().trim().split("")

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img className={styles.logo} src={logo} alt="logo" />
        <img
          className={styles.paymentTypeImg}
          src={paymentTypeImg}
          alt="payment-type"
        />
      </div>
      <div className={styles.cardNumber}>
        <span className={styles.numberTitle}>
          {paymentType.toLowerCase() === "Картой".toLowerCase()
            ? "Номер карты"
            : "Лицевой счёт"}
        </span>
        <div className={styles.number}>
          {cardArr.length > 10 ? (
            <>
              <span>{cardArr.slice(0, 4)}</span>
              <span>{cardArr.slice(4, 8)}</span>
              <span>{cardArr.slice(8, 12)}</span>
              <span>{cardArr.slice(12, 16)}</span>
            </>
          ) : (
            <>{cardNumber}</>
          )}
        </div>
      </div>
      <div className={styles.user}>
        <span className={styles.userTitle}>Имя держателя</span>
        <div className={styles.userName}>
          {first_name} {last_name}
        </div>
      </div>
      {limit ? (
        <div className={styles.limit}>
          <div className={styles.limitBox}>
            <span className={styles.limitTitle}>Годен до</span>
            <div className={styles.limitDateBox}>
              <div className={styles.limitDate}>{limit}</div>
            </div>
            {cardTypeImg ? (
              <img
                className={styles.cardTypeImg}
                src={cardTypeImg}
                alt="card-type"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Card
