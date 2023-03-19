import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GroupIcon from "@material-ui/icons/Group";

const useStyles = makeStyles((theme) => ({
  root: {
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

const CardExample = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://static.ditdot.hr/images/info/ux-ui/ux-ui-00.png"
        title="Card Image"
      />
      <CardContent className={classes.content}>
        <Typography className={classes.title}>UX/UI</Typography>
        <div className={classes.iconContainer}>
          <div className={classes.iconPosition}>
            <AccessTimeIcon className={classes.icon} />
            <Typography className={classes.text}>3мкс</Typography>
          </div>
          <div className={classes.iconPosition}>
            <GroupIcon className={classes.icon} />
            <Typography className={classes.text}>2 группы</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardExample;
