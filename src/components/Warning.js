import React from "react";
import { Link } from "react-router-dom";
import { withStyles, Paper, Button } from "@material-ui/core";

const styles = theme => ({
  paper: {
    paddingTop: "1vh",
    paddingBottom: "1vh",
    paddingLeft: "1vw",
    paddingRight: "1vw",
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "30vw",
    position: "absolute"
  },
  link: {
    color: "black",
    textDecoration: "none"
  }
});

function Warning(props) {
  const { toggleShowWarningNextTime, classes, hideWarning } = props;
  return (
    <Paper className={classes.paper}>
      <div>
        <p>
          Are you sure you want to leave the page? You will lose all your
          progress if you do.
        </p>
        <Link to="/" className={classes.link}>
          <Button>Continue</Button>
        </Link>
        <Button onClick={hideWarning}>Cancel</Button>
        <label>
          Don't show again
          <input type="checkbox" onChange={toggleShowWarningNextTime} />
        </label>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(Warning);
