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
    height: "70vh",
    marginLeft: "1vw",
    marginRight: "1vw",
    background: "#FBFBFB",
    width: "46vw"
  },
  gridItem: {
    height: "80vh"
  },
  description: {
    fontSize: 28,
    marginTop: "10vh"
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
        <Grid item xs={6} className={classes.gridItem}>
          <Paper className={classes.paper}>
            <Rules />
            <StartButton />
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <Paper className={classes.paper}>
            <AverageScoreContainer avgScoreType="OVERALL" />
            <p className={classes.description}>
              This is the win/lose ratio of all previous users.
              <br /> Do your best and try to increase it !!
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Homepage);
