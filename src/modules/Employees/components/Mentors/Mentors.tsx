import { user } from '../../assets';
import UserCard from '../Card/Card';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const MentorsCards = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '98%', gap: '24px' }}>
      {items.map((item) => (
        <UserCard
          key={item}
          name="Кушбак Мамытов"
          position="Front-end"
          photoUrl={user}
          workingDays="Пн/Ср/Пт"
          workingHours="9am - 5pm"
        />
      ))}
    </div>
  );
};

export default MentorsCards;
