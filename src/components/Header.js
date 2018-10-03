import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textAlign: "center"
  },
  homeButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    color: "white",
    textDecoration: "none"
  },
  title: {
    fontSize: "1.7em",
    fontFamily: "Mali",
    marginRight: 150
  },
  icon: {
    width: 40,
    height: 40
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.link}>
            <IconButton
              className={classes.homeButton}
              color="inherit"
              aria-label="Home"
            >
              <HomeIcon className={classes.icon} />
            </IconButton>
          </Link>
          <Typography variant="title" color="inherit" className={classes.grow}>
            <div className={classes.title}>Doggo.io</div>
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
