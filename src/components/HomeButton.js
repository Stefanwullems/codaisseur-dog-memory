import React from "react";
import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

const styles = {
  homeButton: {
    marginLeft: -12,
    marginRight: 20
  },
  icon: {
    width: 40,
    height: 40
  }
};

function HomeButton(props) {
  const { classes } = props;
  return (
    <IconButton
      className={classes.homeButton}
      color="inherit"
      aria-label="Home"
    >
      <HomeIcon className={classes.icon} />
    </IconButton>
  );
}

export default withStyles(styles)(HomeButton);
