import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Box } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
//import Linkedin from '../../assets/largeLinkedin.svg'
import gmail from '../../assets/email.png'

interface UserCardProps {
  onCardClick: () => void;
  name: string;
  photoUrl: string;
  position: string;
  linkedin: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  photoUrl,
  position,
  linkedin, email, onCardClick
}) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card} onClick={onCardClick}>
        <MoreVert className={classes.box} />
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
  }
});