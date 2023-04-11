import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import Spinner from '../../components/spinner/spinner'
import Modal from '../../components/Modal/Modal'
import IconButton from '../../components/iconButton/IconButton'
import SearchBar from '../../modules/CoursePage/components/SearchBar/SearchBar'
import SwitcherButton from '../../modules/students/components/SwitcherButton/SwitcherButton'
import ProfileIcon from '../../modules/students/components/profileIcon/ProfileIcon'
import FilterButton from '../../modules/students/components/filterButton/filterButton'
import StudentCard from '../../modules/students/components/studentCard/StudentCard'
import StudentForm from '../../modules/students/forms/studentForm/StudentForm'
import GroupCard from '../../modules/students/components/groupCard/GroupCard'
import GroupForm from '../../modules/students/forms/groupForm/GroupForm'
import { getProfileById } from '../../modules/profilePage/redux/asyncActions'
import {
  getDepartmentFilters,
  getStudentsOnStudy,
} from '../../modules/students/redux/asyncActions'
import { plusIcon } from '../../modules/students/assets/icons'

import styles from './StudentsPage.module.scss'

type ModalState = [boolean, Dispatch<SetStateAction<boolean>>]
type activeOptionState = [string, Dispatch<SetStateAction<string>>]

const StudentsPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [activeOption, setActiveOption]: activeOptionState =
    useState('Студенты')
  const [departmentFilter, setDepartmentFilter] = useState('')
  const [modalActive, setModalActive]: ModalState = useState(false)

  const auth = useAppSelector((state) => state.auth)
  const profile = useAppSelector((state) => state.profile)
  const study = useAppSelector((state) => state.studentsOnStudy)

  const token = auth.user?.access
  const authUserId = auth.user?.id
  const auth_first_name = profile.profile?.first_name
  const auth_last_name = profile.profile?.last_name
  const auth_avatar = profile.profile?.image!
  const { isLoading } = study
  const studentsOnStudy = study.studentsOnStudy
  const studentsOnStudyForFilters = study.studentsOnStudyForFilters

  useEffect(() => {
    if (authUserId !== undefined) {
      dispatch(getProfileById(authUserId))
    }
  }, [])

  useEffect(() => {
    if (token !== undefined) {
      dispatch(getDepartmentFilters(token))
    }
  }, [])

  useEffect(() => {
    if (activeOption === 'Студенты' && token !== undefined) {
      dispatch(getStudentsOnStudy({ token, departmentFilter }))
    }
  }, [departmentFilter])

  const onToggleModal = useCallback(() => {
    setModalActive((prev) => !prev)
  }, [])

  const onAddStudent = useCallback(() => {
    setModalActive((prev) => !prev)
  }, [])

  const departmentFilters = [
    {
      id: '',
      text: 'Все',
      count: studentsOnStudyForFilters.length,
      extraClassForText: styles.all,
    },
    {
      id: 'ux-ui',
      text: 'UX/UI',
      count: studentsOnStudyForFilters.filter(
        (student) => student.department.name === 'ux-ui'
      ).length,
      extraClassForText: styles.ux,
    },
    {
      id: 'front-end',
      text: 'Front-end',
      count: studentsOnStudyForFilters.filter(
        (student) => student.department.name === 'front-end'
      ).length,
      extraClassForText: styles.front,
    },
    {
      id: 'pm',
      text: 'PM',
      count: studentsOnStudyForFilters.filter(
        (student) => student.department.name === 'pm'
      ).length,
      extraClassForText: styles.pm,
    },
    {
      id: 'back-end',
      text: 'Back-end',
      count: studentsOnStudyForFilters.filter(
        (student) => student.department.name === 'back-end'
      ).length,
      extraClassForText: styles.back,
    },
    {
      id: 'android',
      text: 'Android',
      count: studentsOnStudyForFilters.filter(
        (student) => student.department.name === 'android'
      ).length,
      extraClassForText: styles.android,
    },
    {
      id: 'ios',
      text: 'iOS',
      count: studentsOnStudyForFilters.filter(
        (student) => student.department.name === 'ios'
      ).length,
      extraClassForText: styles.ios,
    },
    {
      id: 'flutter',
      text: 'Flutter',
      count: studentsOnStudyForFilters.filter(
        (student) => student.department.name === 'flutter'
      ).length,
      extraClassForText: styles.flutter,
    },
    {
      id: 'olimped_programming',
      text: 'Олимп. программирование',
      count: studentsOnStudyForFilters.filter(
        (student) => student.department.name === 'olimped_programming'
      ).length,
      extraClassForText: styles.olymp,
    },
  ]

  if (isLoading) {
    return <Spinner />
  }

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
              onClick={onAddStudent}
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
        {departmentFilters.map(({ id, text, count, extraClassForText }) => (
          <FilterButton
            key={id}
            text={text}
            count={count}
            isActive={departmentFilter === id}
            onClick={() => setDepartmentFilter(id)}
            extraClassForText={extraClassForText}
          />
        ))}
      </div>

      <div className={styles.content}>
        {activeOption === 'Студенты' ? (
          studentsOnStudy
            .slice()
            .reverse()
            .map((student) => {
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
        {activeOption === 'Студенты' ? (
          <StudentForm
            setModalActive={setModalActive}
            departmentFilter={departmentFilter}
          />
        ) : (
          <GroupForm />
        )}
      </Modal>
    </div>
  )
}

export default StudentsPage
