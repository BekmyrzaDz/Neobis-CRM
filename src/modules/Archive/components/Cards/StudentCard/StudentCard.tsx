import styles from './StudentCard.module.scss'
import payd from '../../../assets/payd.svg'
import instagram from '../../../assets/instagram.svg'
// import { IDropdownOption } from '../dropdown/dropDown.props'
// import DropdownButton from '../dropdown/dropDown'

// const options: IDropdownOption[] = [
//   {
//     label: 'Обучается',
//     value: 'Обучается',
//   },
//   {
//     label: 'Закончил',
//     value: 'Закончил',
//   },
//   {
//     label: 'Прервал',
//     value: 'Прервал',
//   },
// ]

const StudentCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.paid}>
        <img src={payd} alt='payd' />
        <span>Оплачено</span>
      </div>

      <div className={styles.id}>ID654789</div>

      <div className={styles.about}>
        <h3 className={styles.name}>Руслан Сабитов</h3>
        <h5 className={styles.number}>+996555755755</h5>
        <h3 className={styles.position}>Front-End</h3>
      </div>

      <div className={styles.footer}>
        <img src={instagram} alt='instagram' />
      </div>
    </div>
  )
}

export default StudentCard
