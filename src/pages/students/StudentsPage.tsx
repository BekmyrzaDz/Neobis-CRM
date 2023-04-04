import IconButton from '../../components/iconButton/IconButton'
import ProfileIcon from '../../modules/students/components/profileIcon/ProfileIcon'
import SearchBar from '../../modules/CoursePage/components/SearchBar/SearchBar'
import StudentCard from '../../modules/students/components/studentCard/StudentCard'
import FilterButton from '../../modules/students/components/filterButton/filterButton'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import GroupCard from '../../modules/students/components/groupCard/GroupCard'
import StudentForm from '../../modules/students/forms/studentForm/StudentForm'
import Modal from '../../components/Modal/Modal'
import plusIcon from '../../modules/students/assets/icons/plus.svg'
import GroupForm from '../../modules/students/forms/groupForm/GroupForm'
import SwitcherButton from '../../modules/students/components/SwitcherButton/SwitcherButton'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getProfileById } from '../../modules/profilePage/redux/asyncActions'
import { reset } from '../../modules/profilePage/redux/profileSlice'
import { useNavigate } from 'react-router-dom'

import styles from './StudentsPage.module.scss'

type ModalState = [boolean, Dispatch<SetStateAction<boolean>>]

const StudentsPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [activeOption, setActiveOption] = useState<string>('Студенты')
  const [modalActive, setModalActive]: ModalState = useState(false)
  const id = useAppSelector((state) => state.auth.user?.id)
  const { first_name, last_name, image } = useAppSelector(
    (state) => state.profile.profile
  ) ?? { first_name: '', last_name: '', image: '' }
  const { isSuccess } = useAppSelector((state) => state.profile)

  useEffect(() => {
    if (id !== undefined) dispatch(getProfileById(id))
  }, [])

  if (isSuccess) {
    dispatch(reset())
  }

  const onToggleModal = useCallback(() => {
    setModalActive((prev) => !prev)
  }, [])

  const buttons = document.querySelectorAll('#filterBtns button')
  buttons[0]?.classList?.add(`${styles.activeBtn}`)
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove "active" class from all buttons
      buttons.forEach((button) => {
        button.classList.remove(styles.activeBtn)
      })

      // Add "active" class to clicked button
      button.classList.add(styles.activeBtn)
    })
  })

  return (
    <div className={styles.studentPage}>
      <div className={styles.header}>
        <SearchBar />

        <div className={styles.actions}>
          <SwitcherButton
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />

          {activeOption === 'Студенты' ? (
            <IconButton
              text={'Добавить студента'}
              icon={plusIcon}
              onClick={onToggleModal}
            />
          ) : (
            <IconButton
              text={'Добавить группу'}
              icon={plusIcon}
              onClick={onToggleModal}
            />
          )}

          <ProfileIcon
            avatar={image}
            text={`${first_name} ${last_name} `}
            onClick={() => navigate('/profile')}
          />
        </div>
      </div>

      <div className={styles.filterBtns} id='filterBtns'>
        <FilterButton
          text={'Все'}
          count={'24'}
          className={`${styles.all}`}
        />
        <FilterButton
          text={'UX/UI'}
          count={'24'}
          className={`${styles.ux}`}
        />
        <FilterButton
          text={'Front-end'}
          count={'24'}
          className={`${styles.front}`}
        />
        <FilterButton
          text={'PM'}
          count={'24'}
          className={`${styles.pm}`}
        />
        <FilterButton
          text={'Back-end'}
          count={'24'}
          className={`${styles.back}`}
        />
        <FilterButton
          text={'Android'}
          count={'24'}
          className={`${styles.android}`}
        />
        <FilterButton
          text={'iOS'}
          count={'24'}
          className={`${styles.ios}`}
        />
        <FilterButton
          text={'Flutter'}
          count={'24'}
          className={`${styles.flutter}`}
        />
        <FilterButton
          text={'Олимп. программирование'}
          count={'24'}
          className={`${styles.olimp}`}
        />
      </div>

      <div className={styles.content}>
        {activeOption === 'Студенты' ? (
          <>
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
          </>
        ) : (
          <>
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
          </>
        )}
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        {activeOption === 'Студенты' ? <StudentForm /> : <GroupForm />}
      </Modal>
    </div>
  )
}

export default StudentsPage
