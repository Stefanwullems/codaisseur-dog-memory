import React from "react";
import { withStyles } from "@material-ui/core";
import LinkDelay from "./LinkDelay";
import ListItem from "@material-ui/core/ListItem";
import Sound from 'react-sound';

const styles = {
  unclicked: {
    fontSize: 30,
    listStyle: "none",
    color: "black",
    background: "white",
    "&:hover": {
      background: "#3f51b5",
      color: "white"
    },
    transition: "0.2s"
  },
  correct: {
    fontSize: 30,
    listStyle: "none",
    color: "black",
    background: "#32CD32",
    transition: "0.2s"
  },
  incorrect: {
    fontSize: 30,
    listStyle: "none",
    color: "white",
    background: "#ff2222",
    transition: "0.2s"
  },
  link: {
    color: "black",
    textDecoration: "none"
  }
};

function Option(props) {
  const {
    classes,
    dog,
    level,
    redirect,
    checkIfIsCorrect,
    hasClicked,
    isCorrect
  } = props;


  return (
    <React.Fragment>
      {isCorrect && <audio ref= {React.createRef()} src="http://www.barbneal.com/wp-content/uploads/bark12.mp3" autoPlay/>}
      <LinkDelay
        to={`/playground/${level}`}
        delay={2000}
        onDelayStart={checkIfIsCorrect}
        onDelayEnd={redirect}
        className={classes.link}
      >
        {!hasClicked && <ListItem className={classes.unclicked}>{dog}</ListItem>}
        {hasClicked && showWinOrLoseButton(isCorrect, classes, dog)}
      </LinkDelay>
    </React.Fragment>
  );
}

const showWinOrLoseButton = (isCorrect, classes, dog) => {
  if (isCorrect) {
    return <ListItem className={classes.correct}>{dog}</ListItem>;
  } else return <ListItem className={classes.incorrect}>{dog}</ListItem>;
};

export default withStyles(styles)(Option);
