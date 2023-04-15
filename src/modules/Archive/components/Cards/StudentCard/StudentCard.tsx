import styles from './StudentCard.module.scss'
import payd from '../../../assets/payd.svg'
import instagram from '../../../assets/instagram.svg'

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

const StudentCard = (props: MyComponentProps) => {

  const { info } = props;

  console.log(info)


  return (
    <div className={styles.card}>
      <div className={styles.paid}>
        <img src={payd} alt='payd' />
        <span>Оплачено</span>
      </div>

      <div className={styles.id}>{info.id}</div>

      <div className={styles.about}>
        <h3 className={styles.name}>{`${info.first_name} ${info.last_name}`}</h3>
        <h5 className={styles.number}>{info.phone}</h5>
        <h3 className={styles.position}>{info.department.name}</h3>
      </div>
    </div>
  )
}

export default StudentCard
