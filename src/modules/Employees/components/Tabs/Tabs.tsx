import { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import DataBase from '../../components/DataBase/DataBase';
import Mentors from '../../components/Mentors/Mentors';

interface TabsItems {
  title: string;
  count: number;
}

const TabsItem: TabsItems[] = [
  { title: 'Все сотрудники', count: 25 },
  { title: 'Менеджеры', count: 10 },
  { title: 'Преподаватели', count: 8 },
  { title: 'Админы', count: 8 },
];

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
  Tabs: {
    marginBottom: '29px',
    fontSize: '18px',
    textTransform: 'none',
    fontWeight: 'bold',
    letterSpacing: '1px',
    border: '2px solid #aaa',
    borderRadius: '16px',
    margin: '0px 5px',
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

export default function TabComponent() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        {TabsItem?.map((tab, idx: number) => (
          <Tab
            key={idx}
            className={`${classes.Tabs} ${value === idx ? classes.activeTab : ''}`}
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
      {value === 0 && <DataBase />}
      {value === 1 && <DataBase />}
      {value === 2 && <Mentors />}
      {value === 3 && <DataBase />}
    </div>
  );
}
