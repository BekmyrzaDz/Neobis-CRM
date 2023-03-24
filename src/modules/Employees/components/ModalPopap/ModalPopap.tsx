import React, { useState, useCallback } from 'react';
import { image, arrow, closeIcon } from '../../assets';
import { roles } from '../../mockAPI/popapAPI';
import { Linkedin, MentorsInfo } from '../mentorsAddition/mentosAddition'
import styles from './ModalPopap.module.scss';

type TPopap = {
  popap: boolean;
  setPopap: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalPopap: React.FC<TPopap> = ({ popap, setPopap }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<number | null>(null);

  const modalHeight = open ? '670px' : '670px';
  const modalWidth = open ? '655px' : '655px';
  const modalPadding = open ? '24px 20px 24px 32px' : '24px 32px';

  const handleClick = useCallback((idx: number) => {
    setOpen(idx === 2 && true);
    setValue(idx);
  }, []);

  return (
    <div className={styles.bg}>
      <div
        className={styles.modalPopap}
        style={{
          height: modalHeight,
          width: modalWidth,
          padding: modalPadding,
        }}>
        <div
          className={styles.scroll}>
          <h2 className={styles.title}>Создание сотрудника</h2>
          <img
            onClick={() => setPopap(false)}
            className={styles.close}
            src={closeIcon}
            alt="close"
          />
          <div className={styles.roles}>
            {roles.map((item, idx) => {
              const isSelected = idx === value;
              const backgroundColor = isSelected ? '#756fb3' : '#fff';
              const textColor = isSelected ? '#fff' : '#252525';
              const imgSrc = isSelected ? item.secondImg : item.img;
              return (
                <div
                  key={item.id}
                  onClick={() => handleClick(idx)}
                  className={styles.role}
                  style={{ backgroundColor }}
                >
                  <div className={styles.roleImages}>
                    <img src={imgSrc} alt="Teacher" />
                  </div>
                  <p style={{ color: textColor }}>{item.title}</p>
                </div>
              );
            })}
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
            {open && <Linkedin />
            }
          </div>
          {open && <MentorsInfo />}
          <button className={styles.add}>Добавить сотрудника</button>
        </div>
      </div>
    </div>
  );
};
export default ModalPopap;