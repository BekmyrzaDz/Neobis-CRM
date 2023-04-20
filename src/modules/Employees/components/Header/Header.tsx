import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, makeStyles, Box } from '@material-ui/core';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { useNavigate } from 'react-router-dom'
import { getProfileById } from '../../../profilePage/redux/asyncActions'
import { plus } from '../../assets';
import SearchBar from '../../../CoursePage/components/SearchBar/SearchBar';
import ModalPopap from '../ModalPopap/ModalPopap';
import ProfileIcon from '../../../students/components/profileIcon/ProfileIcon';





function Header() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const classes = useStyles();

  const [popap, setPopap] = useState<boolean>(false);

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
          <SearchBar />
          <Box className={classes.wrapper} >
            <Button onClick={() => setPopap(!popap)} className={classes.button} variant="contained">
              <img src={plus} alt="plus" style={{ marginRight: '13px' }} />
              Добавить сотрудника
            </Button>
            {popap && <ModalPopap popap={popap} setPopap={setPopap} />}
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
  wrapper: {
    display: 'flex',
    alignItems: 'center'
  }
}));








