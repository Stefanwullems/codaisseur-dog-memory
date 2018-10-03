import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "30vw",
    marginTop: "7vh"
  },
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
  }
});

function SelectForm(props) {
  const { currentDogs, classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        {currentDogs.map((dog, i) => generateDogList(dog, i, classes))}
      </Paper>
    </React.Fragment>
  );
}

const generateDogList = (dog, i, classes) => {
  return (
    <ListItem key={i} className={classes.option}>
      {dog}
    </ListItem>
  );
};

SelectForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectForm);
