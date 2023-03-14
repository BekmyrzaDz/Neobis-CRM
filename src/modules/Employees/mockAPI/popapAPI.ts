import { admin, adminDark, manager, managerDark, teacher, teacherDark } from '../assets';

type Roles = {
  id: number;
  img: string;
  secondImg: string;
  title: string;
  boolean: boolean;
};

type Departments = {
  id: number;
  value: string;
  color: string;
};

export const roles: Roles[] = [
  {
    id: 0,
    img: admin,
    secondImg: adminDark,
    title: 'Администратор',
    boolean: false,
  },
  {
    id: 1,
    img: manager,
    secondImg: managerDark,
    title: 'Офис-менеджер',
    boolean: false,
  },
  {
    id: 2,
    img: teacher,
    secondImg: teacherDark,
    title: 'Преподаватель',
    boolean: true,
  },
];

export const departments: Departments[] = [
  {
    id: 0,
    value: 'Front-end',
    color: '#756FB3',
  },
  {
    id: 1,
    value: 'UI/UX',
    color: '#A2238E',
  },
  {
    id: 2,
    value: 'Project managers',
    color: '#70BF44',
  },
  {
    id: 3,
    value: 'Back-end',
    color: '#756FB3',
  },
  {
    id: 4,
    value: 'Android',
    color: '#A2238E',
  },
  {
    id: 5,
    value: 'IOS',
    color: '#A6CE39',
  },
  {
    id: 6,
    value: 'Flutter',
    color: '#756FB3',
  },
  {
    id: 7,
    value: 'Олимпиадное программирование',
    color: '#00A64E',
  },
];
