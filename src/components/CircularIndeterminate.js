import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  progress: {
    marginTop: "20vh",
    marginRight: "5vw"
  }
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <Grid container spacing={24}>
      <Grid item xs={6} />
      <Grid item xs={6} justify="center" alignContent="center">
        <Grid container justify="center">
          <Grid item>
            <CircularProgress className={classes.progress} size={50} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularIndeterminate);
