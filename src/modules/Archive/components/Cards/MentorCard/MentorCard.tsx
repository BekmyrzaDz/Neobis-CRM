import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { RootState } from '../../../../../store/store';
import { archiveMentorById, deleteMentorById } from '../../../redux/mentorArchive/mentorArchiveSlice'
import Linkedin from '../../../assets/largeLinkedin.svg'
import gmail from '../../../assets/email.png';
import archive from '../../../assets/archive.png';
import trash from '../../../assets/redTrash.svg';

interface UserCardProps {
  id: number,
  onCardClick: () => void;
  name: string;
  photoUrl: string;
  position: string;
  linkedin: string;
  email: string;
}






const UserCard: React.FC<UserCardProps> = ({ id,
  name,
  photoUrl,
  position,
  linkedin, email, onCardClick
}) => {
  const classes = useStyles();


  const [selectedItemId, setSelectedItemId] = useState<string | boolean | number | null | object>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch<AppDispatch>()



  const handleClick = (event: React.MouseEvent<HTMLElement>, itemId: string | number | true | object) => {
    setSelectedItemId(itemId);
    setAnchorEl(event.currentTarget);

  };



  const handleClose = () => {
    setSelectedItemId(null);
    setAnchorEl(null);
  };


  const handleDelete = (itemId: string | number | true | object) => {
    const id = Number(itemId);
    dispatch(deleteMentorById(id)).then(() => {
      window.location.reload();
    });
  };

  const handleArchive = (itemId: string | number | true | object) => {
    const id = Number(itemId);
    dispatch(archiveMentorById(id)).then(() => {
      window.location.reload();
    });
  };

  const isItemSelected = selectedItemId === id;

  const handleArchiveClick = () => handleArchive(id);
  const handleDeleteClick = () => handleDelete(id);


  return (
    <>
      <Card className={classes.card} onClick={onCardClick}>
        <>
          <MoreVert className={classes.box} onClick={(event) => handleClick(event, id)} />
          <Menu classes={{ paper: classes.menu }}
            id="three-dots-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl && isItemSelected)}
            onClose={handleClose}>
            <MenuItem className={classes.menuItem} onClick={handleArchiveClick}>
              <img src={archive} alt='archive' />
              Разархивировать
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleDeleteClick}>
              <img src={trash} alt='trash' />
              Удалить
            </MenuItem>
          </Menu>
        </>
        <CardMedia className={classes.media} image={photoUrl} />
        <CardContent style={{ textAlign: 'center' }}>
          <Typography className={classes.name}>{name}</Typography>
          <Typography className={classes.position}>{position}</Typography>
          <a className={classes.linkedin} href={linkedin} target="_blank">
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a className={classes.email} href={`mailto:${email}`} target="_blank">
            <img src={gmail} alt="email" /> Написать на email
          </a>
        </CardContent>
      </Card>

    </>
  );
};

export default UserCard;


const useStyles = makeStyles({
  card: {
    cursor: 'pointer',
    width: 200,
    height: 260,
    borderRadius: 16,
    position: 'relative',
  },
  box: {
    color: '#756FB3',
    fontWeight: 'bold',
    position: 'absolute',
    top: '10px',
    right: '5px'
  },
  media: {
    height: 80,
    width: 80,
    borderRadius: '50%',
    margin: '16px auto',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '15px',
  },
  position: {
    color: '#32B483',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  info: {
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    margin: '5px 0',
  },
  linkedin: {
    background: '#0077B5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    margin: '5px 0'
  },
  email: {
    fontSize: '13px',
    textAlign: 'center',
    background: '#756FB3',
    padding: '10px 12px',
    color: 'white',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    justifyContent: 'center',
  },
  iconButton: {
    padding: '5px 0 20px 0',
  },
  button: {
    color: '#756FB3',
    fontWeight: 'bold',
    paddingBottom: 25
  },
  menu: {
    marginTop: '60px',
    borderRadius: '18px',
  },
  menuItem: {
    display: 'flex',
    gap: '10px',
    fontSize: 14
  },
});