import React from "react";
import { withStyles } from "@material-ui/core";
import LinkDelay from "./LinkDelay";
import ListItem from "@material-ui/core/ListItem";

const styles = {
  option: {
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
  link: {
    color: "black",
    textDecoration: "none"
  }
};

function Option(props) {
  const { classes, dog, level, redirect } = props;

  return (
    <LinkDelay
      to={`/playground/${Number(level) + 1}`}
      delay={2000}
      onDelayEnd={redirect}
      className={classes.link}
    >
      <ListItem className={classes.option}>{dog}</ListItem>
    </LinkDelay>
  );
}

export default withStyles(styles)(Option);
