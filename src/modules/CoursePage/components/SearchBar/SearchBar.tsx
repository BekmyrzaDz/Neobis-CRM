import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 270,
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    border: '1px solid #252525'
  },
  icon: {
    color: "#756FB3",
    marginRight: theme.spacing(1)
  },
  input: {
    flexGrow: 1,
    fontSize: 16,
    "&::placeholder": {
      color: "#252525",
    }
  }
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchIcon className={classes.icon} />
      <InputBase
        placeholder="Поиск"
        classes={{
          root: classes.input
        }}
      />
    </div>
  );
};

export default SearchBar;
