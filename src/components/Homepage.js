import React from "react";
import Grid from "@material-ui/core/Grid";
import StartButton from "./StartButton";
import Rules from "./Rules";
import AverageScoreContainer from "./AverageScoreContainer";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "4vh"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    height: 700,
    marginLeft: 20,
    marginRight: 20,
    background: "#FBFBFB"
  },
  gridItem: {
    height: 800
  }
});

const Homepage = props => {
  const { classes } = props;
  return (
    <div className="home-page">
      <Grid
        container
        className={classes.root}
        spacing={16}
        justify="center"
        align="center"
      >
        <Grid item xs className={classes.gridItem}>
          <Paper className={classes.paper}>
            <Rules />
            <StartButton />
          </Paper>
        </Grid>
        <Grid item xs className={classes.gridItem}>
          <Paper className={classes.paper}>
            <AverageScoreContainer avgScoreType="OVERALL" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Homepage);
