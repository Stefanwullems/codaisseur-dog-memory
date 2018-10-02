import React from "react";
import Grid from "@material-ui/core/Grid";
import StartButton from "./StartButton";
import Rules from "./Rules";
import DataPanel from "./DataPanel";
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
    color: theme.palette.text.secondary,
    height: 700,
    marginLeft: 20,
    marginRight: 20
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
            <DataPanel />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Homepage);
