import React from "react";
import PieChart from "./PieChart";
import { withStyles, Paper } from "@material-ui/core";

const colors = ["#32CD32", "#ff2222"];

const styles = {
  wrapper: {
    color: "black",
    fontSize: 25,
    paddingTop: 50
  },
  correct: {
    color: "#32CD32"
  },
  incorrect: {
    color: "#ff2222"
  },
  header: {
    fontSize: "1.3em"
  },
  paper: {
    padding: 10
  },
  chart: {
    paddingLeft: 300,
    paddingRight: 300
  }
};

function AverageScore(props) {
  const { avgScore, classes, avgScoreType } = props;
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.header}>
        {avgScoreType === "OVERALL" && <span>The</span>}
        {avgScoreType === "PERSONAL" && <span>Your</span>} average score
      </h3>
      <div className={classes.chart}>
        {avgScore && <PieChart data={avgScore} colors={colors} />}
      </div>
      <Paper className={classes.paper}>
        <p className={classes.correct}>
          {avgScore[0].value}% of questions answered correctly
        </p>
        <p className={classes.incorrect}>
          {avgScore[1].value}% of questions answered incorrectly
        </p>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(AverageScore);
