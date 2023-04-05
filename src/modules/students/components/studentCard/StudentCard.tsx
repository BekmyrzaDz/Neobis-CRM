import payd from '../../assets/icons/payd.svg'
import instagram from '../../assets/icons/instagram.svg'
import website from '../../assets/icons/website.svg'
import announcement from '../../assets/icons/announcement.svg'
import other from '../../assets/icons/other.svg'
import { FC } from 'react'

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
  return (
    <div className={styles.card}>
      <div className={styles.paid}>
        <img src={payd} alt='payd' />
        <span>{payment_status}</span>
      </div>

      <div className={styles.id}>{id}</div>

      <div className={styles.about}>
        <h3 className={styles.name}>{`${first_name} ${last_name}`}</h3>
        <h5 className={styles.number}>{phone}</h5>
        <h3 className={styles.position}>{department}</h3>
      </div>

      <div className={styles.footer}>
        <img src={source} alt='source_logo' />
      </div>
    </div>
  )
}

export default StudentCard
