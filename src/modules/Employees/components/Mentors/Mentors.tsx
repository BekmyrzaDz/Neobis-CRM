import React, { useState } from 'react';
import DetailCard from '../DetailCard/DetailCard';
import { user } from '../../assets';
import UserCard from '../Card/Card';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const MentorsCards = () => {

  const [popap, setPopap] = useState(true)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '98%', gap: '24px' }}>
      <UserCard
        onClick={() => setPopap(!popap)}
        name="Кушбак Мамытов"
        position="Front-end"
        photoUrl={user}
        workingDays="Пн/Ср/Пт"
        workingHours="9am - 5pm"
      />
      {popap && <DetailCard popap={popap} setPopap={setPopap} />}
    </div>
  );
};

export default MentorsCards;
