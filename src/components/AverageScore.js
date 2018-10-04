import React from "react";
import PieChart from "./PieChart";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const colors = ["#32CD32", "#ff2222"];

const styles = {
  correct: {
    color: "#32CD32",
    textAlign: "center",
    fontSize: 30
  },
  incorrect: {
    color: "#ff2222",
    textAlign: "center",
    fontSize: 30
  },
  header: {
    fontSize: "1.5em",
    textAlign: "center"
  }
};

function AverageScore(props) {
  const { score, classes, avgScoreType, percentages } = props;
  return (
    <Grid container spacing={24} className={classes.chartGrid}>
      <Grid item xs={12}>
        <h3 className={classes.header}>
          {avgScoreType === "OVERALL" && <span>The</span>}
          {avgScoreType === "PERSONAL" && <span>Your</span>} average score
        </h3>
      </Grid>
      <Grid item xs>
        <Grid container>
          <Grid item xs>
            <div className={classes.correct}>
              Correct:
              <br /> {percentages[0]}%
            </div>
          </Grid>
          <Grid item xs>
            {score && <PieChart data={score} colors={colors} />}
          </Grid>
          <Grid item xs>
            <div className={classes.incorrect}>
              Incorrect:
              <br /> {percentages[1]}%
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(AverageScore);
