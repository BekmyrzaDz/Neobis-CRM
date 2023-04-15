import { useState, useEffect } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { RootState, AppDispatch } from '../../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { gerArhiveManagers } from '../../redux/managerArchive/managerArhiveSlice';
import { getArchiveAdmins } from '../../redux/adminArchive/adminArchiveSlice';
import { getArchiveMentors } from '../../redux/mentorArchive/mentorArchiveSlice';
import { getArchiveStudent } from '../../redux/studentArchive/studdentArchiveSlice';
import { getArchiveGroup } from '../../redux/groupArchive/groupArchiveSlice';
import { getArchiveGourse } from '../../redux/courseArchive/courseArchiveSlice'
import ArchiveBase from '../ArchiveBase/ArchiveBase';
import Students from '../Content/Students/Students';
import Groups from '../Content/Groups/Groups';
import Mentors from '../Content/Mentors/Mentors'
import Courses from '../Content/Courses/Courses'

export default function TabComponent() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch<AppDispatch>()

  const { managers } = useSelector((state: RootState) => state.managerArhive);
  const { admins } = useSelector((state: RootState) => state.adminsArhive);
  const { mentors } = useSelector((state: RootState) => state.mentorArchive);
  const { students } = useSelector((state: RootState) => state.studentArchive);
  const { groups } = useSelector((state: RootState) => state.groupArchive);
  const { courses } = useSelector((state: RootState) => state.courseArchive);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(gerArhiveManagers());
    dispatch(getArchiveAdmins());
    dispatch(getArchiveMentors());
    dispatch(getArchiveStudent());
    dispatch(getArchiveGroup())
    dispatch(getArchiveGourse())
  }, [dispatch]);
  console.log(managers)

  interface TabsItems {
    title: string;
    count: number | string;
  }

  const rows = [
    {
      id: 1,
      first_name: 'Khaza',
      last_name: 'khaan',
      fio: 'dkdjkdkd',
      email: 'ivanov@mail.com',
      phone: '+7 (123) 456-78-90',
      user_type: 'Менеджер',
      image: 'url/to/avatar',
    },
    {
      id: 3,
      first_name: 'Khaza',
      last_name: 'khaan',
      fio: 'dkdjkdkd',
      email: 'ivanov@mail.com',
      phone: '+7 (123) 456-78-90',
      user_type: 'Менеджер',
      image: 'url/to/avatar',

    },
  ];

  const TabsItem: TabsItems[] = [
    { title: 'Менеджеры', count: managers.length },
    { title: 'Админы', count: admins.length },
    { title: 'Преподаватели', count: mentors.length },
    { title: 'Студенты', count: students.length },
    { title: 'Группы', count: groups.length },
    { title: 'Курсы', count: 5 },
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
      {value === 0 && <ArchiveBase employees={managers} />}
      {value === 1 && <ArchiveBase employees={admins} />}
      {value === 2 && <Mentors employees={mentors} />}
      {value === 3 && <Students employees={students} />}
      {value === 4 && <Groups employees={groups} />}
      {value === 5 && <Courses employees={courses} />}
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
    fontSize: '16px',
    textTransform: 'none',
    letterSpacing: '0.5px',
    borderRadius: '16px',
    margin: '0px 5px',
    background: '#aaa',
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
    width: '25px',
    height: '25px',
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
