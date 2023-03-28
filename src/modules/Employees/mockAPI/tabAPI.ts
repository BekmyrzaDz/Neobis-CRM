// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../../store/store';

// const { users } = useSelector((state: RootState) => state.allUsers);

interface TabsItems {
  title: string;
  count: number | string;
}

export const TabsItem: TabsItems[] = [
  { title: 'Все сотрудники', count: 22 },
  { title: 'Менеджеры', count: 10 },
  { title: 'Преподаватели', count: 8 },
  { title: 'Админы', count: 8 },
];
