import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MentorCard from '../../Cards/MentorCard/MentorCard';

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

const MentorsCards = (props: MyComponentProps) => {

  const dispatch = useDispatch<AppDispatch>()



  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (mentor) => {
    setShowModal(true);
    dispatch(getMentorById(mentor.id));
  }

  const { employees } = props;


  // useEffect(() => {
  //   dispatch(getMentorById(5));
  // }, [dispatch]);

  const { mentor } = useSelector((state: RootState) => state.mentors);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '98%', gap: '24px' }}>
      {
        employees.map(mentor => (
          <MentorCard
            key={mentor.id}
            onCardClick={() => handleCardClick(mentor)}
            name={`${mentor.first_name} ${mentor.last_name}`}
            position='Front-end'
            photoUrl={mentor.image}
            linkedin="https://www.linkedin.com/in/khamza-avazbekov-917395201/"
            email="khamzadevv@gmail.com"
          />
        ))
      }
    </div>
  );
};

export default MentorsCards;
