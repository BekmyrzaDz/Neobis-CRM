import { useState, useEffect } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import DataBase from '../../components/DataBase/DataBase';
import Mentors from '../../components/Mentors/Mentors';
import { useSelector } from 'react-redux';
import { getAllEmployees } from '../../redux/allEmployees/allEmployeesSlice';
import { getManagers } from '../../redux/managers/managersSlice'
import { getMentors } from '../../redux/mentors/mentorsSlice'
import { getAdmins } from '../../redux/admins/adminsSlice'
import { RootState } from '../../../../store/store';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

export default function TabComponent() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [value, setValue] = useState(0);

  const { allEmployees } = useSelector((state: RootState) => state.allEmployees);
  const { managers } = useSelector((state: RootState) => state.managers);
  const { mentors } = useSelector((state: RootState) => state.mentors);
  const { admins } = useSelector((state: RootState) => state.admins);



  useEffect(() => {
    dispatch(getAllEmployees());
    dispatch(getManagers())
    dispatch(getMentors())
    dispatch(getAdmins())
  }, [dispatch]);


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  interface TabsItems {
    title: string;
    count: number | string;
  }

  const TabsItem: TabsItems[] = [
    { title: 'Все сотрудники', count: allEmployees.length },
    { title: 'Менеджеры', count: managers.length },
    { title: 'Преподаватели', count: mentors.length },
    { title: 'Админы', count: admins.length },
  ];

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        {TabsItem?.map((tab, idx: number) => (
          <Tab
            key={idx}
            className={`${classes.Tab} ${value === idx ? classes.activeTab : ''}`}
            label={
              <div>
                {tab.title}
                <span
                  className={`${classes.tabCount} ${value === idx ? classes.activeTabCount : ''}`}>
                  {tab.count}
                </span>
              </div>
            }
          />
        ))}
      </Tabs>
      {value === 0 && <DataBase employees={allEmployees} />}
      {value === 1 && <DataBase employees={managers} />}
      {value === 2 && <Mentors employees={mentors} />}
      {value === 3 && <DataBase employees={admins} />}
    </div>
  );
}




const useStyles = makeStyles({
  root: {
    marginLeft: '25px',
    '& .Mui-selected .MuiTab-wrapper': {
      borderBottom: 'none',
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  },
  Tab: {
    marginBottom: '29px',
    fontSize: '18px',
    textTransform: 'none',
    letterSpacing: '0.5px',
    borderRadius: '16px',
    margin: '0px 5px',
    background: '#756fb3',
    color: '#fff',
    opacity: 'unset',
  },
  activeTab: {
    transition: 'all 0.5s',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderRadius: '16px',
    border: 'none',
  },
  tabCount: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    width: '30px',
    height: '27px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5px',
  },
  activeTabCount: {
    color: '#252525',
    height: '28px',
    padding: '4px 8px',
    borderRadius: '8px',
    width: '28px',
    background: '#E5E5E5',
  },
});
