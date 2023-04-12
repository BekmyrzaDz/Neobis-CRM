
import GroupCard from '../../Cards/GroupCard/GroupCard';
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

const Groups = (props: MyComponentProps) => {


  const employees = [1, 2, 3]

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap: '20px', rowGap: '30px' }}>
      {
        employees.map(mentor => (
          <GroupCard />
        ))
      }
    </div>
  );
};

export default Groups;
