import React from "react"
import CardExample from "../../modules/CoursePage/components/Card/Card"
import DetailCard from "../../modules/CoursePage/components/DetailCard/DetailCard"
import Header from "../../modules/CoursePage/components/Header/Header"
import { courses } from '../../modules/CoursePage/mockAPI/courses'

type Props = {}

const items = [1, 2, 3, 4, 5, 6, 7, 8]

const CoursePage = (props: Props) => {
  return <div style={{ backgroundColor: '#E5E5E5', minHeight: '100vh' }}>
    <Header />
    <div style={{ margin: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
      {
        courses.map((course, idx: number) =>
          <CardExample
            key={idx}
            color={course.color}
            img={course.img}
            title={course.title}
            month={course.month}
            groups={course.groups}
          />)
      }

    </div>
  </div>
}

export default CoursePage
