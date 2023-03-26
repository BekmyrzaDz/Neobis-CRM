import styles from './GroupCard.module.scss'
import timer from '../../assets/icons/timer.svg'
import door from '../../assets/icons/door.svg'
import student from '../../assets/icons/student.svg'
import avatar from '../../assets/icons/avatar.svg'

const GroupCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.room}>
        <div className={styles.aboutRoom}>
          <img src={door} alt='door' />
          <span>Средняя комната</span>
        </div>
        <div className={styles.countRoom}>
          <span>12</span>
          <img src={student} alt='student' />
        </div>
      </div>

      <div className={styles.group}>
        <h1>Java 1</h1>
        <div>
          <img src={timer} alt='timer' />
          <span>18:30 - 20:00</span>
        </div>
      </div>

      <div className={styles.lang}>
        <h3>Back-End</h3>
      </div>

      <ul className={styles.days}>
        <li>Пн</li>
        <li>Ср</li>
        <li>Пт</li>
      </ul>

      <div className={styles.user}>
        <img src={avatar} alt='avatar' />
        <h3>Рашид Назарбеков</h3>
      </div>
    </div>
  )
}

export default GroupCard
