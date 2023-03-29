import { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button, makeStyles, Box } from '@material-ui/core';
import ProfileButton from '../../../../components/ProfileButton';
import SearchBar from '../../../CoursePage/components/SearchBar/SearchBar';
import { user, plus } from '../../assets';
import ModalPopap from '../ModalPopap/ModalPopap';



function Header() {
  const classes = useStyles();
  const [userName, setUserName] = useState<string>('Бексултан Маратов');
  const [popap, setPopap] = useState<boolean>(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <SearchBar />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={() => setPopap(!popap)} className={classes.button} variant="contained">
              <img src={plus} alt="plus" style={{ marginRight: '13px' }} />
              Добавить сотрудника
            </Button>
            {popap && <ModalPopap popap={popap} setPopap={setPopap} />}

            <ProfileButton />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '24px 0',
    '& .MuiPaper-elevation4': {
      boxShadow: 'none',
    },
  },
  toolbar: {
    backgroundColor: '#F1F1F1',
    color: '#252525',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#756FB3',
    borderRadius: '16px',
    marginRight: '16px',
    padding: '17px 16px',
    textTransform: 'none',
    fontSize: '16px',
    color: '#fff',
  },
  userBox: {
    display: 'flex',
    alingItems: 'center',
    background: 'white',
    padding: ' 12px 19px',
    borderRadius: '16px',
  },
  userName: {
    paddingTop: '5px',
    fontSize: '18px',
    marginLeft: '10px',
  },
}));
