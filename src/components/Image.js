import React from "react";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  paper: {
    paddingTop: "1vh",
    paddingBottom: "1vh",
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "30vw"
  },
  img: {
    width: "28vw"
  }
});

const Images = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <img alt="dog" className={classes.img} src={props.image} />

    </Paper>
  );
};


export default withStyles(styles)(Images);
