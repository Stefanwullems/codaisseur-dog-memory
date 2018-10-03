import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textAlign: "center"
  },
  link: {
    color: "white",
    textDecoration: "none"
  },
  title: {
    fontSize: "1.7em",
    fontFamily: "Mali",
    marginRight: 150
  }
};

function Header(props) {
  const { classes, shouldShowWarning, warn } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {shouldShowWarning && (
            <div onClick={warn}>
              <HomeButton />
            </div>
          )}
          {!shouldShowWarning && (
            <Link to="/" className={classes.link}>
              <HomeButton />
            </Link>
          )}
          <Typography variant="title" color="inherit" className={classes.grow}>
            <div className={classes.title}>Doggo Memo</div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
