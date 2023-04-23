import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GroupIcon from "@material-ui/icons/Group";
import { RootState, AppDispatch } from '../../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourses } from "../../redux/courses/coursesSlice";
interface ICourses {
  id: number;
  color: string;
  img: string;
  title: string;
  month: number;
  groups: number;
  onCardClick: () => void;
}


const CardExample: React.FC<ICourses> = ({ color, img, title, month, groups, onCardClick }) => {
  const classes = useStyles();

  const dispatch = useDispatch<AppDispatch>()




  return (
    <Card className={classes.root} onClick={onCardClick} >
      <CardMedia
        className={classes.media}
        image={img}
        title="Card Image"
      />
      <CardContent className={classes.content}>
        <Typography className={classes.title} style={{ color: color, textTransform: 'uppercase' }}>{title}</Typography>
        <div className={classes.iconContainer}>
          <div className={classes.iconPosition}>
            <AccessTimeIcon className={classes.icon} />
            <Typography className={classes.text}>{month}мес</Typography>
          </div>
          <div className={classes.iconPosition}>
            <GroupIcon className={classes.icon} />
            <Typography className={classes.text}>{groups} группы</Typography>
          </div>
        </div>
      </CardContent>
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
    flexDirection: "column"
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
  }
}));