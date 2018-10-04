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
          {avgScoreType === "OVERALL" && <span>The average</span>}
          {avgScoreType === "PERSONAL" && <span>Your</span>} score
        </h3>
      </Grid>
      <Grid item xs>
        <Grid container>
          <Grid item xs>
            <div className={classes.correct}>
              Correct:
              <br />
              <span>{percentages[0]}%</span>
              {avgScoreType === "PERSONAL" && (
                <p>You got {score[0].value} questions right</p>
              )}
            </div>
          </Grid>
          <Grid item xs>
            {score && <PieChart data={score} colors={colors} />}
          </Grid>
          <Grid item xs>
            <div className={classes.incorrect}>
              Incorrect:
              <br />
              <span>{percentages[1]}%</span>
              {avgScoreType === "PERSONAL" && (
                <p>You got {score[1].value} questions wrong</p>
              )}
            </div>
            <div />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(AverageScore);
