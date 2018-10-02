import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  div: {
    color: "black",
    textAlign: "left",
    fontSize: "1.2em"
  },
  questionTypes: {
    listStyle: "none",
    marginTop: 30,
    marginBottom: 30
  },
  strongOr: {
    marginLeft: 30
  },
  invitation: {
    marginTop: 100,
    textAlign: "center"
  }
};

function Rules(props) {
  const { classes } = props;
  return (
    <div className={classes.div}>
      <h3>Welcome to the one and only dog memorizing game.</h3>
      <p>
        In this game you will be presented with two type of questions where you
        have to choose the correct dog breed.
      </p>
      <p className={classes.questionTypes}>
        The questions can be formatted as either
        <ul>
          <li>
            A single image of a dog where you have to choose the right breed
            from multiple answers.
          </li>
          <p className={classes.strongOr}>
            <strong>or</strong>
          </p>
          <li>
            Multiple images of dog breeds where you have to choose the right
            image corresponding to the shown dog breed.
          </li>
        </ul>
      </p>
      <p>
        The difficulty will also ramp up the more accurate you get by adding new
        breeds to the mix
      </p>
      <p className={classes.invitation}>
        If you are ready, please hit the PLAY button and the game will start.
        <strong> Have fun !</strong>
      </p>
    </div>
  );
}

export default withStyles(styles)(Rules);
