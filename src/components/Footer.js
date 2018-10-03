import React from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100vw"
  },
  footerText: {
    color: "white",
    width: "100vw",
    textAlign: "right"
  },
  footer: {
    height: "5vh"
  }
};

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.footer}>
          <Typography className={classes.footerText}>
            Patrick Buijs, Yuga Wicaksono, Stefan Wullems @ Codaisseur 2018
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Footer);
