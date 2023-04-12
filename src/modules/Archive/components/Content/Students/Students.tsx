import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentCard from '../../Cards/StudentCard/StudentCard';
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

const Students = (props: MyComponentProps) => {



  // const { employees } = props;



  const employees = [1, 2, 3, 4, 5, 6, 9, 7, 8]

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '98%', gap: '24px' }}>
      {
        employees.map(mentor => (
          <StudentCard />
        ))
      }
    </div>
  );
};

export default Students;
