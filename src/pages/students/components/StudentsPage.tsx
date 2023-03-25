import ToggleButton from '../../../modules/students/components/toggleButton/ToggleButton'
import HistoryButton from '../../../modules/students/components/historyButton/HistoryButton'
import IconButton from '../../../modules/students/components/iconButton/IconButton'
import ProfileIcon from '../../../modules/students/components/profileIcon/ProfileIcon'
import SearchBar from '../../../modules/CoursePage/components/SearchBar/SearchBar'
import StudentCard from '../../../modules/students/components/studentCard/StudentCard'
import FilterButton from '../../../modules/students/components/filterButton/filterButton'
import { useState } from 'react'
import GroupCard from '../../../modules/students/components/groupCard/GroupCard'

import styles from './StudentsPage.module.scss'
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

  return (
    <div className={styles.studentPage}>
      <div className={styles.header}>
        <SearchBar />

        <div className={styles.actions}>
          <ToggleButton setCardFilter={setCardFilter} />
          <HistoryButton />

          {cardFilter === 'student' ? (
            <IconButton text={'Добавить студента'} />
          ) : (
            <IconButton text={'Добавить группу'} />
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
    </div>
  )
}

export default StudentsPage
