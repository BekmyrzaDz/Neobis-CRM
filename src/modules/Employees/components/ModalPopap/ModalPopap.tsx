import React, { useState } from 'react';
import admin from '../../assets/Roles/admin.svg';
import teacher from '../../assets/Roles/teacher.svg';
import manager from '../../assets/Roles/manager.svg';
import img from '../../assets/image.svg';
import time from '../../assets/time.svg';
import arrow from '../../assets/arrow.png';
import close from '../../assets/close.png';
import styles from './ModalPopap.module.scss';

type Roles = {
  id: number;
  img: string;
  title: string;
};

type Departments = {
  id: number;
  value: string;
  color: string;
};

type Days = {
  id: number;
  title: string;
};

const roles: Roles[] = [
  {
    id: 0,
    img: admin,
    title: 'Администратор',
  },
  {
    id: 1,
    img: manager,
    title: 'Офис-менеджер',
  },
  {
    id: 2,
    img: teacher,
    title: 'Преподаватель',
  },
];

const departments: Departments[] = [
  {
    id: 0,
    value: 'Front-end',
    color: '#756FB3',
  },
  {
    id: 1,
    value: 'UI/UX',
    color: '#A2238E',
  },
  {
    id: 2,
    value: 'Project managers',
    color: '#70BF44',
  },
  {
    id: 3,
    value: 'Back-end',
    color: '#756FB3',
  },
  {
    id: 4,
    value: 'Android',
    color: '#A2238E',
  },
  {
    id: 5,
    value: 'IOS',
    color: '#A6CE39',
  },
  {
    id: 6,
    value: 'Flutter',
    color: '#756FB3',
  },
  {
    id: 7,
    value: 'Олимпиадное программирование',
    color: '#00A64E',
  },
];

const days: Days[] = [
  { id: 0, title: 'Пн' },
  { id: 1, title: 'Вт' },
  { id: 2, title: 'Ср' },
  { id: 3, title: 'Чт' },
  { id: 4, title: 'Пт' },
  { id: 5, title: 'Сб' },
  { id: 6, title: 'Вс' },
];

const ModalPopap = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.bg} style={{ overflowY: open ? 'auto' : 'hidden' }}>
      <div className={styles.modalPopap} style={{ height: open ? '1300px' : '820px' }}>
        <h2 className={styles.title}>Создание сотрудника</h2>
        <img onClick={() => setOpen(!open)} className={styles.close} src={close} alt="close" />
        <div className={styles.roles}>
          {roles.map((item) => (
            <div className={styles.role}>
              <img src={item.img} alt="Teacher" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.photo}>
          <img src={img} alt="photo" />
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
        </div>

        {open ? (
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
            <div className={styles.days}>
              {days.map((item) => (
                <div className={styles.day}>{item.title}</div>
              ))}
            </div>
            <div className={styles.times}>
              <div className={styles.time}>
                <img src={time} alt="time" />
                <span>18:30 - 20:00</span>
              </div>
              <button className={styles.timeBtn}>+</button>
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
        ) : null}
        <button className={styles.add}>Добавить сотрудника</button>
      </div>
    </div>
  );
};

export default ModalPopap;
