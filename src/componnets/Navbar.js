import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#237980 important",
    position: "fixed",
    width: "100%",
    zIndex: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            CoCoHub Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
