import React, { useState } from "react"
import CourseCard from '../../Cards/CourseCard/CoursesCard'
import CoursesCard from '../../Cards/CourseCard/CoursesCard'
import uxui from '../../modules/CoursePage/assets/courses/ux.ui.jpg';
import front from '../../modules/CoursePage/assets/courses/frontEnd.png';
import back from '../../modules/CoursePage/assets/courses/backEnd.png';
import ios from '../../modules/CoursePage/assets/courses/ios.png';
import pm from '../../modules/CoursePage/assets/courses/pm.webp';
import android from '../../modules/CoursePage/assets/courses/android.png';
import flutter from '../../modules/CoursePage/assets/courses/flutter.webp';
import olimpic from '../../modules/CoursePage/assets/courses/olimpic.png';


interface ICourses {
  id: number;
  color: string;
  img: string;
  title: string;
  month: number;
  groups: number;
  onClick: () => void;
}

interface IMentors {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | number;
  image: string;
  token: void;
  patent_number: number;
  patent_start: string;
  patent_end: string;
}

interface MyComponentProps {
  employees: IMentors;
}

const Courses = (props: MyComponentProps) => {
  const [selectedCard, setSelectedCard] = useState<ICourses | null>(null)

  const { employees } = props;
  console.log(employees)

  const handleCardClick = (card: ICourses) => {
    setSelectedCard(card);
  };

  return <div style={{ backgroundColor: '#F1F1F1', minHeight: '100vh' }}>
    <div style={{  display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
      {
        employees.map((course, idx: number) =>
          <CourseCard course={course} />)
      }
    </div>
  </div>
}

export default Courses
