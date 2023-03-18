import { linkedin, arrow } from '../../assets';
import { departments } from '../../mockAPI/popapAPI';

import styles from './mentorsAddition.module.scss'


export const Linkedin = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <img style={{ width: '70px' }} src={linkedin} alt="linkedin" />
      <input placeholder="Поставьте ссылку на Linkedin" type="email" />
    </div>
  )
}


export const MentorsInfo = () => {
  return (
    <div className={styles.additionally}>
      <p className={styles.selectTitle}>Выберите департамент</p>
      <select className={styles.select}>
        {departments.map((departament) => (
          <option key={departament.id} style={{ color: `${departament.color}` }}>{departament.value}</option>
        ))}
      </select>
      <div className={styles.patents}>
        <div className={styles.patentsNum}>
          <input type="text" />
        </div>
        <div className={styles.patentsTime}>
          <input type="date" /> -
          <input type="date" />
        </div>
      </div>
      <div className={styles.groups}>
        <div className={styles.group}>
          <span>Python1</span>
          <img src={arrow} alt="arrow" />
        </div>
        <select className={styles.groupSelect}>
          <option>First group</option>
          <option>Second group</option>
          <option>Third group</option>
        </select>
        <button className={styles.timeBtn}>+</button>
      </div>
    </div>
  )
}