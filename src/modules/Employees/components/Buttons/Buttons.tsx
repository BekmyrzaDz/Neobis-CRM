import React, { useState } from 'react';
import { Button, IconButton, Menu, MenuItem, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import archive from '../../assets/archive.png';
import trash from '../../assets/redTrash.svg';

const useStyles = makeStyles({
  iconButton: {
    padding: '5px 0 20px 0',
  },
  button: {
    color: '#756FB3',
    fontWeight: 'bold',
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

type ThreeDotsButtonProps = {
  onDelete: () => void;
  onArchive: () => void;
};

const ThreeDotsButton = (props: ThreeDotsButtonProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    props.onDelete();
    handleClose();
  };
  const handleArchive = () => {
    props.onArchive();
    handleClose();
  };
  return (
    <>
      <IconButton className={classes.iconButton} onClick={handleClick}>
        <Box className={classes.button}>...</Box>
      </IconButton>
      <Menu
        classes={{ paper: classes.menu }}
        id="three-dots-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.menuItem} onClick={handleArchive}>
          <img src={archive} alt='archive' />
          Архивировать
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleDelete}>
          <img src={trash} alt='trash' />
          Удалить
        </MenuItem>
      </Menu>
    </>
  );
};

export default ThreeDotsButton;
