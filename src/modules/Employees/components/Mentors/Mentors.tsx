import React, { useState } from 'react';
import DetailCard from '../DetailCard/DetailCard';
import { user } from '../../assets';
import UserCard from '../Card/Card';
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

  const [popap, setPopap] = useState(false)

  const { employees } = props;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '98%', gap: '24px' }}>
      {
        employees.map(mentor => (
          <UserCard
            onClick={() => setPopap(!popap)}
            name={`${mentor.first_name} ${mentor.last_name}`}
            position="Front-end"
            photoUrl={mentor.image}
            workingDays="Пн/Ср/Пт"
            workingHours="9am - 5pm"
          />
        ))
      }
    </div>
  );
};

export default MentorsCards;
