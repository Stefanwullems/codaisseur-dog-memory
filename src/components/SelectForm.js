import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import OptionContainer from "./OptionContainer";

const styles = theme => ({
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "30vw",
    marginTop: "7vh"
  }
});

function SelectForm(props) {
  const { currentDogs, classes, hasSelected, select, currentDog } = props;

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        {currentDogs.map(dog => (
          <OptionContainer
            dog={dog}
            key={dog}
            hasSelected={hasSelected}
            select={select}
            currentDog={currentDog}
          />
        ))}
      </Paper>
    </React.Fragment>
  );
}

export default withStyles(styles)(SelectForm);
