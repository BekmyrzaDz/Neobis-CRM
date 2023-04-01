import ToggleButton from '../../modules/students/components/toggleButton/ToggleButton'
import IconButton from '../../components/iconButton/IconButton'
import ProfileIcon from '../../modules/students/components/profileIcon/ProfileIcon'
import SearchBar from '../../modules/CoursePage/components/SearchBar/SearchBar'
import StudentCard from '../../modules/students/components/studentCard/StudentCard'
import FilterButton from '../../modules/students/components/filterButton/filterButton'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import GroupCard from '../../modules/students/components/groupCard/GroupCard'
import StudentForm from '../../modules/students/forms/studentForm/StudentForm'
import Modal from '../../components/Modal/Modal'
import plusIcon from '../../modules/students/assets/icons/plus.svg'

import styles from './StudentsPage.module.scss'
import GroupForm from '../../modules/students/forms/groupForm/GroupForm'

type ModalState = [boolean, Dispatch<SetStateAction<boolean>>]

export interface IFilter {
  text: string
  count: string
}

const DBFilter: IFilter[] = [
  {
    text: 'Все',
    count: '24',
  },
  {
    text: 'UX/UI',
    count: '10',
  },
  {
    text: 'Front-end',
    count: '8',
  },
  {
    text: 'Backend',
    count: '8',
  },
  {
    text: 'Andriod',
    count: '8',
  },
  {
    text: 'IOS',
    count: '12',
  },
  {
    text: 'Flutter',
    count: '14',
  },
]

const StudentsPage = () => {
  const [cardFilter, setCardFilter] = useState('student')
  const [modalActive, setModalActive]: ModalState = useState(false)

  const onToggleModal = useCallback(() => {
    setModalActive((prev) => !prev)
  }, [])

  return (
    <div className={styles.studentPage}>
      <div className={styles.header}>
        <SearchBar />

        <div className={styles.actions}>
          <ToggleButton setCardFilter={setCardFilter} />

          {cardFilter === 'student' ? (
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
            avatar={
              'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
            }
            text={'Ruslan Sabitov'}
          />
        </div>
      </div>

      <div className={styles.filterBtns}>
        {DBFilter.map((filter) => (
          <FilterButton
            text={filter.text}
            count={filter.count}
            key={filter.text}
          />
        ))}
      </div>

      <div className={styles.content}>
        {cardFilter === 'student' ? (
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
        {cardFilter === 'student' ? <StudentForm /> : <GroupForm />}
      </Modal>
    </div>
  )
}

export default StudentsPage
