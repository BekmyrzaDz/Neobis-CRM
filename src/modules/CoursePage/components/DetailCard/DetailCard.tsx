import React from 'react';
import uxui from '../../assets/courses/pm.jpg';
import pen from '../../assets/icons/pen.svg';
import time from '../../assets/icons/time.svg';
import mentor from '../../assets/kushbak.png';
import trash from '../../assets/trash.png'
import styles from './DetailsCard.module.scss'

const DetailCard: React.FC<UserCardProps> = ({ name,
  photoUrl,
  position,
  linkedin, email, onCardClick }) => {


  return (
    <div className={styles.card} onClick={onCardClick}>
      <div className={styles.cardImg}>
        <img src={uxui} alt="uxui" />
        <button> <img src={pen} alt="change" /> Изменить</button>
      </div>
      <h1 className={styles.title}>UX/UI Desing</h1>
      <div className={styles.month}> <img src={time} alt="time" /> <span>3 мес.</span></div>
      <h2 className={styles.subtitle}>Преподаватели</h2>
      <div className={styles.mentors}>
        <div className={styles.mentor}>
          <div className={styles.mentorImg}>
            <img src={mentor} alt="mentor" />
          </div>
          <span>Илгиз Ойчиев</span>
        </div>
        <div className={styles.mentor}>
          <div className={styles.mentorImg}>
            <img src={mentor} alt="mentor" />
          </div>
          <span>Илгиз Ойчиев</span>
        </div>
      </div>
      <h2 className={styles.subtitle}>Описание</h2>
      <div className={styles.description}>
        Что такое UX/UI, прямым текстом: <br />
        UX — это User Experience (дословно: «опыт пользователя»). То есть это то, какой опыт/впечатление получает пользователь от работы с вашим интерфейсом. Удается ли ему достичь цели и на сколько просто или сложно это сделать. А UI — это User Interface (дословно «пользовательский интерфейс») — то, как выглядит интерфейс и то, какие физические характеристики приобретает. Определяет, какого цвета будет ваше «изделие», удобно ли будет человеку попадать пальцем в кнопочки, читабельным ли будет текст и тому подобное…UX/UI дизайн — это проектирование любых пользовательских интерфейсов в которых удобство использования так же важно как и внешний вид.
      </div>
      <h2 className={styles.subtitle}>Группы</h2>
      <div className={styles.groups}>
        <div className={styles.group}>
          <h3>UX/UI</h3>
          <div>
            <img src={time} alt="time" />
            <span>9:00-11:00</span>
          </div>
        </div>
        <div className={styles.group}>
          <h3>UX/UI</h3>
          <div>
            <img src={time} alt="time" />
            <span>9:00-11:00</span>
          </div>
        </div>

      </div>
      <div className={styles.btns}>
        <button className={styles.change}>
          <img src={pen} alt="change" />
          Редактировать
        </button>
        <button className={styles.delete}>
          <img src={trash} alt="delete" />
          Редактировать
        </button>
      </div>
    </div>
  );
};

export default DetailCard;