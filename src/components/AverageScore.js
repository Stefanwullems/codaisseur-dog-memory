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
    textAlign: "center",
    paddingRight: 40
  },
  chartGrid: {
    paddingRight: "2vw"
  }
};

function AverageScore(props) {
  const { avgScore, classes, avgScoreType } = props;
  return (
    <Grid container spacing={24} className={classes.chartGrid}>
      <Grid item xs={12}>
        <h3 className={classes.header}>
          {avgScoreType === "OVERALL" && <span>The</span>}
          {avgScoreType === "PERSONAL" && <span>Your</span>} average score
        </h3>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={3}>
            <div className={classes.correct}>Correct: {avgScore[0].value}%</div>
          </Grid>
          <Grid item xs={6}>
            {avgScore && <PieChart data={avgScore} colors={colors} />}
          </Grid>
          <Grid item xs={3}>
            <div className={classes.incorrect}>
              Incorrect: {avgScore[1].value}%
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(AverageScore);
