import Button from '../../components/button'
import profile from '../../assets/images/profile.svg'
import editAva from '../../assets/icons/editAva.svg'
import { ProfileForm } from '../../modules/profilePage'
import { useNavigate } from 'react-router-dom'

import styles from './profilePage.module.scss'

const ProfilePage = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <Button className={styles.backButton} onClick={() => navigate(-1)}>
          Вернуться назад
        </Button>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Личный кабинет</h2>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <span className={styles.leftSubtitle}>Фото профиля</span>
            <img src={profile} alt='avatar' className={styles.ava} />
            <div className={styles.action}>
              <img src={editAva} alt='' />
              <span className={styles.editAva}>Изменить фото</span>
            </div>
          </div>

          <div className={styles.right}>
            <span className={styles.rightSubtitle}>Личные данные</span>
            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
