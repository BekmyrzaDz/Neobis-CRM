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
import { profileReset } from '../../modules/profilePage/redux/profileSlice'
import { useNavigate } from 'react-router-dom'
import { getStudentsOnStudy } from '../../modules/students/redux/asyncActions'
import { studentsOnStudyReset } from '../../modules/students/redux/studentsOnStudySlice'

import styles from './StudentsPage.module.scss'

type ModalState = [boolean, Dispatch<SetStateAction<boolean>>]
type activeOptionState = [string, Dispatch<SetStateAction<string>>]

const StudentsPage = () => {
  const [activeOption, setActiveOption]: activeOptionState =
    useState('Студенты')
  const [modalActive, setModalActive]: ModalState = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.user?.access)
  const authUserId = useAppSelector((state) => state.auth.user?.id)
  const auth_first_name = useAppSelector(
    (state) => state.profile.profile?.first_name
  )
  const auth_last_name = useAppSelector(
    (state) => state.profile.profile?.last_name
  )
  const auth_avatar = useAppSelector((state) => state.profile.profile?.image!)
  const isProfileSuccess = useAppSelector((state) => state.profile.isSuccess)
  const isStudentOnStudySuccess = useAppSelector(
    (state) => state.studentsOnStudy.isSuccess
  )
  const studentsOnStudy = useAppSelector(
    (state) => state.studentsOnStudy.studentsOnStudy
  )

  useEffect(() => {
    if (authUserId !== undefined) {
      dispatch(getProfileById(authUserId))
    }
  }, [])

  if (isProfileSuccess) {
    dispatch(profileReset())
  }

  useEffect(() => {
    if (activeOption === 'Студенты' && token !== undefined) {
      dispatch(getStudentsOnStudy(token))
    }
  }, [])

  if (isStudentOnStudySuccess) {
    dispatch(studentsOnStudyReset())
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
            avatar={auth_avatar}
            text={`${auth_first_name} ${auth_last_name} `}
            onClick={() => navigate('/profile')}
          />
        </div>
      </div>

      <div className={styles.filterBtns} id='filterBtns'>
        <FilterButton text={'Все'} count={'24'} className={`${styles.all}`} />
        <FilterButton text={'UX/UI'} count={'24'} className={`${styles.ux}`} />
        <FilterButton
          text={'Front-end'}
          count={'24'}
          className={`${styles.front}`}
        />
        <FilterButton text={'PM'} count={'24'} className={`${styles.pm}`} />
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
        <FilterButton text={'iOS'} count={'24'} className={`${styles.ios}`} />
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
          studentsOnStudy.map((student) => {
            return (
              <StudentCard
                key={student.phone}
                id={student.id}
                first_name={student.first_name}
                last_name={student.last_name}
                phone={student.phone}
                department={student.department.name}
                came_from={student.came_from.name}
                payment_status={student.payment_status}
              />
            )
          })
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
