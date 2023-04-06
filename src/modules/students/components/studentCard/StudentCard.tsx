import { FC } from 'react'
import {
  payd,
  instagram,
  website,
  announcement,
  other,
} from '../../assets/icons'

import styles from './StudentCard.module.scss'
interface IStudentCardProps {
  id: number
  first_name: string
  last_name: string
  phone: string
  department: string
  came_from: string
  payment_status: string
}

const StudentCard: FC<IStudentCardProps> = ({
  id,
  first_name,
  last_name,
  phone,
  department,
  came_from,
  payment_status,
}) => {
  // source icon render
  let source
  switch (came_from) {
    case 'from_instagram':
      source = instagram
      break
    case 'from_website':
      source = website
      break
    case 'from_announcement':
      source = announcement
      break
    default:
      source = other
      break
  }

  // department color
  let departmentColor
  let departmentValue
  switch (department) {
    case 'ux-ui':
      departmentColor = `${styles.position} ${styles.ux}`
      departmentValue = `UX/UI`
      break
    case 'front-end':
      departmentColor = `${styles.position} ${styles.front}`
      departmentValue = `Front-end`
      break
    case 'pm':
      departmentColor = `${styles.position} ${styles.pm}`
      departmentValue = `PM`
      break
    case 'back-end':
      departmentColor = `${styles.position} ${styles.back}`
      departmentValue = `Back-end`
      break
    case 'android':
      departmentColor = `${styles.position} ${styles.android}`
      departmentValue = `Android`
      break
    case 'ios':
      departmentColor = `${styles.position} ${styles.ios}`
      departmentValue = `iOS`
      break
    case 'flutter':
      departmentColor = `${styles.position} ${styles.flutter}`
      departmentValue = `Flutter`
      break
    case 'olimped_programming':
      departmentColor = `${styles.position} ${styles.olymp}`
      departmentValue = `Олимп. программирование`
      break
    default:
      departmentColor = `${styles.position}`
      break
  }

  // department color
  let paydClass
  let payment_status_value
  switch (payment_status) {
    case '1':
      paydClass = `${styles.payStatus} ${styles.paidSpan}`
      payment_status_value = 'Оплачено'
      break
    case '2':
      paydClass = `${styles.payStatus} ${styles.mustPaySpan}`
      payment_status_value = 'Должен оплатить'
      break
    case '3':
      paydClass = `${styles.payStatus} ${styles.soonPaySpan}`
      payment_status_value = 'Скоро оплата'
      break
    default:
      paydClass = ''
      break
  }

  return (
    <div className={styles.card}>
      <div className={styles.paid}>
        <img src={payd} alt='payd' />
        <span className={paydClass}>{payment_status_value}</span>
      </div>

      <div className={styles.id}>{id}</div>

      <div className={styles.about}>
        <h3 className={styles.name}>{`${first_name} ${last_name}`}</h3>
        <h5 className={styles.number}>{phone}</h5>
        <h3 className={departmentColor}>{departmentValue}</h3>
      </div>

      <div className={styles.footer}>
        <img src={source} alt='source_logo' />
      </div>
    </div>
  )
}

export default StudentCard
