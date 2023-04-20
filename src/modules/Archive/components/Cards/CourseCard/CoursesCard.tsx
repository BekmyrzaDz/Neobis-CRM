import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GroupIcon from "@material-ui/icons/Group";
import archive from '../../../assets/archive.png';
import trash from '../../../assets/redTrash.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { deleteCourseById, archiveCourseById } from '../../../redux/courseArchive/courseArchiveSlice'



interface ICourses {
  id: number;
  color: string;
  img: string;
  title: string;
  month: number;
  groups: number;
  onClick: () => void;
}

const CardExample: React.FC<ICourses> = (course) => {

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
    const shouldExecute = window.confirm('Вы уверены, что хотите выполнить эту операцию?');
    if (shouldExecute) {
      dispatch(deleteCourseById(id)).then(() => {
        window.location.reload();
      });
    }
  };

  const handleArchive = (itemId: string | number | true | object) => {
    const id = Number(itemId);
    const shouldExecute = window.confirm('Вы уверены, что хотите выполнить эту операцию?');
    if (shouldExecute) {
      dispatch(archiveCourseById(id)).then(() => {
        window.location.reload();
      });
    }
  };

  const isItemSelected = selectedItemId === course.course.id;

  const handleArchiveClick = () => handleArchive(course.course.id);
  const handleDeleteClick = () => handleDelete(course.course.id);

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={course.course.image}
        title="Card Image"
      />
      <CardContent className={classes.content}>
        <Typography className={classes.title} style={{ color: course.course.color }}>{course.course.name}</Typography>
        <div className={classes.iconContainer}>
          <div className={classes.iconPosition}>
            <AccessTimeIcon className={classes.icon} />
            <Typography className={classes.text}>{course.course.duration_month}мес</Typography>
          </div>
          <div className={classes.iconPosition}>
            <GroupIcon className={classes.icon} />
            <Typography className={classes.text}>{course.course.group_set.length} группы</Typography>
          </div>
        </div>
      </CardContent>
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
    </Card>
  );
};

export default CardExample;


const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    padding: 16,
    width: 360,
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    position: 'relative'
  },
  box: {
    color: '#756FB3',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '15px',
    right: '15px'
  },
  media: {
    height: 160,
    width: "100%",
    margin: "auto",
    borderRadius: 16
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    marginBottom: theme.spacing(1)
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: theme.spacing(1)
  },
  iconPosition: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5)
  },
  text: {
    marginLeft: theme.spacing(0.5)
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
}));