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
    textAlign: "right",
    paddingTop: "2.6vh"
  },
  footer: {
    height: "6.8vh"
  },
  textDiv: {
    paddingRight: "2vw"
  }
};

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.footer}>
        <Typography className={classes.footerText}>
          <div className={classes.textDiv}>
            Patrick Buijs, Yuga Wicaksono, Stefan Wullems @ Codaisseur 2018
          </div>
        </Typography>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Footer);
