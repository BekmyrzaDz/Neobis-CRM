import React, { useState } from "react"
import CardExample from "../../modules/CoursePage/components/Card/Card"
import DetailCard from "../../modules/CoursePage/components/DetailCard/DetailCard"
import Header from "../../modules/CoursePage/components/Header/Header";
import uxui from '../../modules/CoursePage/assets/courses/ux.ui.jpg';
import front from '../../modules/CoursePage/assets/courses/frontEnd.png';
import back from '../../modules/CoursePage/assets/courses/backEnd.png';
import ios from '../../modules/CoursePage/assets/courses/ios.png';
import pm from '../../modules/CoursePage/assets/courses/pm.webp';
import android from '../../modules/CoursePage/assets/courses/android.png';
import flutter from '../../modules/CoursePage/assets/courses/flutter.webp';
import olimpic from '../../modules/CoursePage/assets/courses/olimpic.png';

type Props = {}

interface ICourses {
  id: number;
  color: string;
  img: string;
  title: string;
  month: number;
  groups: number;
  onClick: () => void;
}

export const courses: ICourses[] = [
  { id: 0, color: '#C656A0', img: uxui, title: 'UX/UI', month: 3, groups: 2, onClick: () => null },
  { id: 1, color: '#32B483', img: front, title: 'Front-End', month: 6, groups: 2, onClick: () => null },
  { id: 2, color: '#756FB3', img: back, title: 'Back-End', month: 2, groups: 7, onClick: () => null },
  { id: 3, color: '#A6CE39', img: ios, title: 'IOS', month: 4, groups: 1, onClick: () => null },
  { id: 4, color: '#70BF44', img: pm, title: 'Prject management', month: 3, groups: 2, onClick: () => null },
  { id: 5, color: '#A2238E', img: android, title: 'Android', month: 6, groups: 4, onClick: () => null },
  { id: 6, color: '#00A64E', img: flutter, title: 'Flutter', month: 4, groups: 2, onClick: () => null },
  { id: 7, color: '#A6CE39', img: olimpic, title: 'Олимп. Программирование', month: 3, groups: 2, onClick: () => null },
];


const CoursePage = (props: Props) => {
  const [selectedCard, setSelectedCard] = useState<ICourses | null>(null)


  const handleCardClick = (card: ICourses) => {
    setSelectedCard(card);
  };

  return <div style={{ backgroundColor: '#E5E5E5', minHeight: '100vh' }}>
    <Header />
    <div style={{ margin: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
      {
        courses.map((course, idx: number) =>
          <CardExample
            key={idx}
            id={course.id}
            color={course.color}
            img={course.img}
            title={course.title}
            month={course.month}
            groups={course.groups}
            onClick={() => handleCardClick(course)}
          />)
      }
    </div>
  </div>
}

export default CoursePage
