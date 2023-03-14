import React, { useState } from 'react';
import { image, linkedin, arrow, closeIcon } from '../../assets';
import { roles, departments } from '../../mockAPI/popapAPI';
import styles from './detailedMentorCard.module.scss';

type TPopap = {
  popap: boolean;
  setPopap: () => void;
};

const DetailedMentorCard: React.FC<TPopap> = ({ popap, setPopap }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState(null);

  const handleClick = (idx: number) => {
    setOpen(idx === 2 ? true : false);
    setValue(idx);
  };
  return (
    <div className={styles.bg} style={{}}>
      <div
        className={styles.modalPopap}
        style={{
          height: open ? '1400' : '850px',
          width: open ? '720px' : '700px',
          padding: open ? '24px 20px 24px 32px' : '24px 32px',
        }}>
        <div
          className={`${open && styles.scroll}`}
          style={{ overflowY: open ? 'scroll' : 'hidden' }}>
          <h2 className={styles.title}>Создание сотрудника</h2>
          <img
            onClick={() => setPopap(!popap)}
            className={styles.close}
            src={closeIcon}
            alt="close"
          />
          <div className={styles.roles}>
            {roles.map((item, idx: number) => (
              <div
                onClick={() => handleClick(idx)}
                className={styles.role}
                style={{
                  backgroundColor: value === idx ? '#756fb3' : '#fff',
                }}>
                <img src={value === idx ? item.secondImg : item.img} alt="Teacher" />
                <p style={{ color: value === idx ? '#fff' : '#252525' }}>{item.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.photo}>
            <img src={image} alt="photo" />
            <span>Загрузите фото профиля. Макс. размер - 2MB</span>
            {/* <input type="file" accept="image/*" src="button-image.png" alt="Submit" /> */}
            <button>Выбрать</button>
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
            {open && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <img style={{ width: '70px' }} src={linkedin} alt="linkedin" />
                <input placeholder="Поставьте ссылку на Linkedin" type="email" />
              </div>
            )}
          </div>

          {open && (
            <div className={styles.additionally}>
              <p className={styles.selectTitle}>Выберите департамент</p>
              <select className={styles.select}>
                {departments.map((departament) => (
                  <option style={{ color: `${departament.color}` }}>{departament.value}</option>
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
          )}
          <button className={styles.add}>Добавить сотрудника</button>
        </div>
      </div>
    </div>
  );
};

export default DetailedMentorCard;
