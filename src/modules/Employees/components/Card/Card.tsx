import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Box } from '@material-ui/core';

import { calendar, time } from '../../assets';

const useStyles = makeStyles({
  card: {
    cursor: 'pointer',
    width: 180,
    height: 240,
    borderRadius: 16,
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
});

interface UserCardProps {
  onClick: () => void;
  name: string;
  photoUrl: string;
  position: string;
  workingDays: string;
  workingHours: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  photoUrl,
  position,
  workingDays,
  workingHours,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={photoUrl} />
      <CardContent style={{ textAlign: 'center' }}>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.position}>{position}</Typography>
        <Box className={classes.info}>
          <img src={calendar} alt="calendar" />
          {workingDays}
        </Box>
        <Box className={classes.info}>
          <img src={time} alt="time" /> {workingHours}
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
