import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { image, closeIcon } from '../../assets';
import { createAdmin } from '../../redux/admins/adminsSlice'
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

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [archive, setarchive] = useState(true);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  console.log(firstName, lastName, email, phone)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('is_archive', true)
    dispatch(createAdmin(formData));
    // reset form
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setImage(null);
  };


  const handleClick = useCallback((idx: number) => {
    setOpen(idx === 2 && true);
    setValue(idx);
  }, []);

  return (
    <div className={styles.bg}>
      <div
        className={styles.modalPopap}
        style={{
          height: '670px',
          width: '655px',
          padding: '24px 32px',
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
            {/* <input type="file" id="image" accept="image/*" onChange={handleImageChange} /> */}
            <button>Выбрать</button>
          </div>
          <div className={styles.info}>
            <div>
              <p>Имя</p>
              <input placeholder="Введите имя" type="text" value={firstName} onChange={handleFirstNameChange} />
            </div>
            <div>
              <p>Фамилия</p>
              <input placeholder="Введите фамилию" type="text" value={lastName} onChange={handleLastNameChange} />
            </div>
            <div>
              <p>Номер телефона</p>
              <input placeholder="Введите номер телефона" type="tel" value={phone} onChange={handlePhoneChange} />
            </div>
            <div>
              <p>Электронная почта</p>
              <input placeholder="Введите электронную почту" type="email" value={email} onChange={handleEmailChange} />
            </div>
            {open && <Linkedin />
            }
          </div>
          {open && <MentorsInfo />}
          <button className={styles.add} onClick={handleSubmit}>Добавить сотрудника</button>
        </div>
      </div>
    </div>
  );
};
export default ModalPopap;