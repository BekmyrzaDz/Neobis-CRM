import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, makeStyles, Box } from '@material-ui/core';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { useNavigate } from 'react-router-dom'
import { getProfileById } from '../../../profilePage/redux/asyncActions'
import SearchBar from '../../../CoursePage/components/SearchBar/SearchBar';
import blackList from '../../assets/blackList.svg'
// import ModalPopap from '../ModalPopap/ModalPopap';
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
              <img src={blackList} alt="blacklist" style={{ marginRight: '13px' }} />
              Черный список
            </Button>
            {/* {popap && <ModalPopap popap={popap} setPopap={setPopap} />} */}
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
    backgroundColor: '#000',
    borderRadius: '16px',
    marginRight: '16px',
    padding: '17px 16px',
    textTransform: 'none',
    fontSize: '16px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
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








