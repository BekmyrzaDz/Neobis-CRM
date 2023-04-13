import styles from './GroupCard.module.scss'
import timer from '../../assets/icons/timer.svg'
import door from '../../assets/icons/door.svg'
import student from '../../assets/icons/student.svg'
import { FC } from 'react'

interface IGroupCardProps {
  classroom: string
  students_max: number
  name: string
  start_at_time: string
  end_at_time: string
  department: string
  schedule_type: number
  mentor: {
    id: number
    first_name: string
    last_name: string
    image: string
  }
  current_students: number
}

const GroupCard: FC<IGroupCardProps> = ({
  classroom,
  students_max,
  name,
  start_at_time,
  end_at_time,
  department,
  schedule_type,
  mentor,
  current_students,
}) => {
  // DEPARTMENT SWITCHCASE
  let departmentClassName
  let departmentValue
  switch (department) {
    case 'ux-ui':
      departmentClassName = `${styles.lang} ${styles.ux}`
      departmentValue = 'UX/UI'
      break
    case 'front-end':
      departmentClassName = `${styles.lang} ${styles.front}`
      departmentValue = 'Front-End'
      break
    case 'pm':
      departmentClassName = `${styles.lang} ${styles.pm}`
      departmentValue = 'PM'
      break
    case 'back-end':
      departmentClassName = `${styles.lang} ${styles.back}`
      departmentValue = 'Back-End'
      break
    case 'android':
      departmentClassName = `${styles.lang} ${styles.android}`
      departmentValue = 'Android'
      break
    case 'ios':
      departmentClassName = `${styles.lang} ${styles.ios}`
      departmentValue = 'iOS'
      break
    case 'flutter':
      departmentClassName = `${styles.lang} ${styles.flutter}`
      departmentValue = 'Flutter'
      break
    case 'olimped_programming':
      departmentClassName = `${styles.lang} ${styles.olymp}`
      departmentValue = 'PO'
      break
  }
  return (
    <div className={styles.card}>
      <div className={styles.room}>
        <div className={styles.aboutRoom}>
          <img src={door} alt='door' />
          <span>{classroom}</span>
        </div>
        <div className={styles.countRoom}>
          <span>
            {current_students}/{students_max}
          </span>
          <img src={student} alt='student' />
        </div>
      </div>

      <div className={styles.group}>
        <h1>{name}</h1>
        <div>
          <img src={timer} alt='timer' />
          <span>
            {start_at_time} - {end_at_time}
          </span>
        </div>
      </div>

      <div className={departmentClassName}>
        <h3>{departmentValue}</h3>
      </div>

      <ul className={styles.days}>
        {schedule_type === 1 ? (
          <>
            <li>Пн</li>
            <li>Ср</li>
            <li>Пт</li>
          </>
        ) : (
          <>
            <li>Вт</li>
            <li>Чт</li>
            <li>Сб</li>
          </>
        )}
      </ul>

      <div className={styles.user}>
        <img src={mentor.image} alt='avatar' />
        <h3>
          {mentor.first_name} {mentor.last_name}
        </h3>
      </div>
    </div>
  )
}

export default GroupCard
