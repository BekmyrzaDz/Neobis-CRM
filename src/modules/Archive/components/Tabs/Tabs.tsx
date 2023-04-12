import { useState, useEffect } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

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

  const TabsItem: TabsItems[] = [
    { title: 'Менеджеры', count: 5 },
    { title: 'Преподаватели', count: 5 },
    { title: 'Админы', count: 5 },
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
      {/* {value === 0 && <DataBase employees={allEmployees} />}
      {value === 1 && <DataBase employees={managers} />}
      {value === 2 && <Mentors employees={mentors} />}
      {value === 3 && <DataBase employees={admins} />} */}
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
