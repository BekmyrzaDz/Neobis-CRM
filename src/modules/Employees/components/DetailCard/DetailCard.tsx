import React from 'react';
import { arrow, closeIcon, kushbak, linkedin, redTrash } from '../../assets';
import { departments } from '../../mockAPI/popapAPI';
import styles from './DetailCard.module.scss';

type TPopap = {
  popap: boolean;
  setPopap: React.Dispatch<React.SetStateAction<boolean>>;
};

const DetailCard: React.FC<TPopap> = ({ popap, setPopap }) => {

  return (
    <div className={styles.bg}>
      <div
        className={styles.modalPopap}>
        <div>
          <h2 className={styles.title}>Карточка преподавателя</h2>
          <img
            onClick={() => setPopap(false)}
            className={styles.close}
            src={closeIcon}
            alt="close"
          />
          <div className={styles.photo}>
            <div className={styles.teacherImg}>
              <img src={kushbak} alt="teacher" />
            </div>
            {/* <input type="file" accept="image/*" src="button-image.png" alt="Submit" /> */}
            <button>Изменить</button>
          </div>
          <div style={{ marginTop: '20px' }}>
            <p className={styles.selectTitle}>Выберите департамент</p>
            <select className={styles.select}>
              {departments.map((departament) => (
                <option key={departament.id} style={{ color: `${departament.color}` }}>{departament.value}</option>
              ))}
            </select>
          </div>
          <div className={styles.info}>
            <div>
              <p>Имя</p>
              <input placeholder="Введите имя" type="text" />
            </div>
            <div>
              <p>Фамилия</p>
              <input placeholder="Введите фамилию" type="text" />
            </div>
            <div>
              <p>Отчество</p>
              <input placeholder="Введите отчество" type="text" />
            </div>
            <div>
              <p>Номер телефона</p>
              <input placeholder="Введите номер телефона" type="tel" />
            </div>
            <div>
              <p>Электронная почта</p>
              <input placeholder="Введите электронную почту" type="email" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <img style={{ width: '70px' }} src={linkedin} alt="linkedin" />
              <input placeholder="Поставьте ссылку на Linkedin" type="email" />
            </div>

          </div>
          <div className={styles.additionally}>
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
          <button className={styles.add}>Сохранить изменения</button>
          <button className={styles.delete}>
            <img src={redTrash} alt="Trash" />
            Удалить преподавателя</button>
        </div>
      </div>
    </div>
  );
};
export default DetailCard;