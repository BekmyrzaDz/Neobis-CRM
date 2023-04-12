import React, { useState, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { image, closeIcon } from '../../assets';
import { createAdmin } from '../../redux/admins/adminsSlice'
import Button from '../../../../components/button'
import { Form, Formik } from "formik";
import { createEmployee } from '../../Schema/Validation'
import Input from '../../../../components/Input/MyInput'
import PreviewImage from '../PreviewImage/PreviewImage';
import MySelect from "../../../../components/Select/MySelect"


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
  const fileRef = useRef(null)

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleClick = useCallback((idx: number) => {
    setOpen(idx === 2 && true);
    setValue(idx);
  }, []);

  interface IEmployees {
    first_name: string
    last_name: string
    email: string
    phone: string
    image: string
    is_active: boolean
    file: string
  }

  const initialValues: IEmployees = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    image: '',
    is_active: true,
    file: ''
  }


  const onSubmit = (values) => {
    console.log(...values)
  }

  return (
    <div className={styles.bg}>
      <div
        className={styles.modalPopap}
      >
        <Formik initialValues={initialValues}
          validationSchema={createEmployee}
          enableReinitialize={true}
          onSubmit={onSubmit}
        >
          <Form
            className={`${open && styles.scroll}`}>
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
              {selectedFile ? (
                <>
                  <img src={URL.createObjectURL(selectedFile)} alt="photo" />
                  <span>Загрузите фото профиля. Макс. размер - 2MB</span></>

              ) : (
                <>
                  <img src={image} alt='photo' />
                  <span>Загрузите фото профиля. Макс. размер - 2MB</span></>
              )}
              <input type="file" name="file" id="file" onChange={handleFileChange} />
            </div>
            <div className={styles.info}>
              <div>
                <Input
                  label="Имя*"
                  id="first_name"
                  name="first_name"
                  type="text"
                  placeholder="Имя"
                  className={styles.firstName}
                />

              </div>
              <div>
                <Input
                  label="Фамилия*"
                  id="last_name"
                  name="last_name"
                  type="text"
                  placeholder="Фамилия"
                />

              </div>
              <div>
                <Input
                  label="Номер телефона*"
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="+996"
                />

              </div>
              <div>
                <Input
                  label="Электронная почта*"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Почта"
                />

              </div>
              {open && <Linkedin />
              }
            </div>
            {open && <MentorsInfo />}
            <button className={styles.add} >Добавить сотрудника</button>
          </Form>
        </Formik>
      </div>
    </div >
  );
};
export default ModalPopap;