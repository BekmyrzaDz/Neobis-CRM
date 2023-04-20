import React, { useState } from 'react';
import { arrow, closeIcon, linkedin, redTrash } from '../../assets';
import { deleteMentorById, archiveMentorById } from '../../redux/mentors/mentorsSlice';
import archive from '../../assets/archiveMentor.png'
import { AppDispatch } from '../../../../store/store';
import { useDispatch } from 'react-redux';



import Spinner from '../../../../components/spinner/spinner'
import styles from './DetailCard.module.scss';
interface IMentor {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  image: string;
  linkedin: string;
  department: {
    name: string;
  };
  patent_number: number;
  patent_start: string;
  patent_end: string;
  is_active: boolean;
}
type YMentor = {
  mentor: Array<IMentor>;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
};



const DetailCard: React.FC<YMentor> = ({ mentor, onClose }) => {
  const mentorID = mentor === null ? null : mentor[0];
  const [open, setOpen] = useState(true)

  const dispatch = useDispatch<AppDispatch>()
  const handleDelete = (itemId: string | number | true | object) => {
    const id = Number(itemId);
    dispatch(deleteMentorById(id)).then(() => {
      window.location.reload();
    });
  };

  const handleArchive = (itemId: string | number | true | object) => {
    const id = Number(itemId);
    dispatch(archiveMentorById(id))
  };

  return (
    <div className={styles.bg}>
      {mentor === null ? <Spinner /> : <div
        className={styles.modalPopap}>
        <div className={`${open && styles.scroll}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 className={styles.title}>Карточка преподавателя</h2>
            <img style={{ cursor: 'pointer' }} onClick={() => handleArchive(mentorID.id)} src={archive} alt='archive' />
          </div>
          <img
            onClick={onClose}
            className={styles.close}
            src={closeIcon}
            alt="close"
          />
          <div className={styles.photo}>
            <div className={styles.teacherImg}>
              <img src={mentorID.image} alt="teacher" />
            </div>
            {/* <input type="file" accept="image/*" src="button-image.png" alt="Submit" /> */}
            <button>Изменить</button>
          </div>
          <div style={{ marginTop: '20px' }}>
            <p className={styles.selectTitle}>Департамент</p>
            <select className={styles.select}>
              {/* {departments.map((departament) => ( */}
              <option >{mentorID?.department.name}</option>
              {/* ))} */}
            </select>
          </div>
          <div className={styles.info}>
            <div>
              <p>Имя</p>
              <input value={mentorID.first_name} placeholder="Имя" type="text" />
            </div>
            <div>
              <p>Фамилия</p>
              <input value={mentorID.last_name} placeholder="Фамилию" type="text" />
            </div>
            <div>
              <p>Номер телефона</p>
              <input value={mentorID.phone} placeholder="Номер телефона" type="tel" />
            </div>
            <div>
              <p>Электронная почта</p>
              <input value={mentorID.email} placeholder="Электронную почта" type="email" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <img style={{ width: '70px' }} src={linkedin} alt="linkedin" />
              <input value={mentorID.linkedin} placeholder="Поставьте ссылку на Linkedin" type="email" />
            </div>
          </div>
          <div className={styles.additionally}>
            <div className={styles.patents}>
              <div className={styles.patentsNum}>
                <input type="text" value={mentorID.patent_number} />
              </div>
              <div className={styles.patentsTime}>
                <input type="text" value={mentorID.patent_start} /> -
                <input type="text" value={mentorID.patent_end} />
              </div>
            </div>
            <div className={styles.groups}>
              {
                mentorID.group_set.map((group) => (
                  <div className={styles.group}>
                    <span>{group.name}</span>
                  </div>
                ))
              }
            </div>
          </div>
          <button className={styles.add}>Сохранить изменения</button>
          <button onClick={() => handleDelete(mentorID.id)} className={styles.delete}>
            <img src={redTrash} alt="Trash" />
            Удалить преподавателя</button>
        </div>
      </div>}
    </div>
  );
};
export default DetailCard;