import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

const styles = {
  btnDiv: {
    marginTop: "8vh"
  },
  link: {
    textDecoration: "none"
  },
  button: {
    width: "35vw",
    height: "12vh",
    color: "white",
    fontWeight: 700,
    fontSize: 50
  }
};

function StartButton(props) {
  const { classes } = props;
  return (
    <div className={classes.btnDiv}>
      <Link to="/playground/1" className={classes.link}>
        <Button variant="contained" color="primary" className={classes.button}>
          PLAY
        </Button>
      </Link>
    </div>
  );
}

export default withStyles(styles)(StartButton);
