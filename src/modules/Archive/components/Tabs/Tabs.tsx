import { useState, useEffect } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import ArchiveBase from '../ArchiveBase/ArchiveBase';
import Students from '../Content/Students/Students';
import Groups from '../Content/Groups/Groups';

export default function TabComponent() {
  const classes = useStyles();
  const [value, setValue] = useState(0);


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

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
    // и так далее
  ];

  const TabsItem: TabsItems[] = [
    { title: 'Менеджеры', count: 5 },
    { title: 'Админы', count: 5 },
    { title: 'Преподаватели', count: 5 },
    { title: 'Студенты', count: 5 },
    { title: 'Группы', count: 5 },
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
      {value === 0 && <ArchiveBase employees={rows} />}
      {value === 1 && <ArchiveBase employees={rows} />}
      {value === 2 && <ArchiveBase employees={rows} />}
      {value === 3 && <Students />}
      {value === 4 && <Groups />}
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
