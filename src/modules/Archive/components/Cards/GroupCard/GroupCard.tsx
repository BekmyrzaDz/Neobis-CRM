import styles from './GroupCard.module.scss'
import timer from '../../../assets/timer.svg'
import door from '../../../assets/door.svg'
import student from '../../../assets/student.svg'
import avatar from '../../../assets/avatar.svg'


interface IMentors {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | number;
  image: string;
  token: void;
  patent_number: number;
  patent_start: string;
  patent_end: string;
}

interface MyComponentProps {
  info: IMentors;
}


const GroupCard = (props: MyComponentProps) => {

  const { info } = props;

  return (
    <div className={styles.card}>
      <div className={styles.room}>
        <div className={styles.aboutRoom}>
          <img src={door} alt='door' />
          <span>{info.classroom.name}</span>
        </div>
        <div className={styles.countRoom}>
          <span>{info.students_max}</span>
          <img src={student} alt='student' />
        </div>
      </div>

      <div className={styles.group}>
        <h1>{info.name}</h1>
        <div>
          <img src={timer} alt='timer' />
          <span>{info.start_at_time} - {info.end_at_time}</span>
        </div>
      </div>

      <div className={styles.lang}>
        <h3>{info.department.name}</h3>
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
