import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button, makeStyles, Box } from '@material-ui/core';
import SearchBox from '../../../../components/SearchBox/SearchBox';
import SearchBar from '../SearchBar/SearchBar';
import user from '../../assets/user.svg';
import plus from '../../assets/plus.svg';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { useNavigate } from 'react-router-dom'
import { getProfileById } from '../../../profilePage/redux/asyncActions'
import ProfileIcon from '../../../students/components/profileIcon/ProfileIcon';



function Header() {
  const classes = useStyles();
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const id = useAppSelector((state) => state.auth.user?.id)


  const { first_name, last_name, image } = useAppSelector(
    (state) => state.profile.profile
  ) ?? { first_name: '', last_name: '', image: '' }


  useEffect(() => {
    if (id !== undefined) dispatch(getProfileById(id))
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <SearchBox />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button className={classes.button} variant="contained">
              <img src={plus} alt="plus" style={{ marginRight: '13px' }} />
              Добавить курс
            </Button>
            <ProfileIcon
              avatar={image}
              text={`${first_name} ${last_name} `}
              onClick={() => navigate('/profile')}
            />
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
    padding: '17px 18px',
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
    marginRight: '40px',

  },
  userName: {
    paddingTop: '5px',
    fontSize: '18px',
    marginLeft: '10px',
  },
}));
