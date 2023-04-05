import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import Spinner from '../../components/spinner/spinner'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { AvaForm, ProfileForm } from '../../modules/profilePage'
import { getProfileById } from '../../modules/profilePage/redux/asyncActions'
import { profileReset } from '../../modules/profilePage/redux/profileSlice'

import styles from './profilePage.module.scss'

const ProfilePage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isLoading, isSuccess } = useAppSelector((state) => state.profile)
  const id = useAppSelector((state) => state.auth.user?.id)

  useEffect(() => {
    if (id !== undefined) dispatch(getProfileById(id))
  }, [])

  if (isSuccess) {
    dispatch(profileReset())
  }

  if (isLoading) {
    return <Spinner />
  }

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
            <AvaForm />
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
