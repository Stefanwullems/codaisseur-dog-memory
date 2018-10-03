import React from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ImageContainer from "./ImageContainer";
import SelectFormContainer from "./SelectFormContainer";
import AverageScoreContainer from "./AverageScoreContainer";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: "3vh"
  }
};

function PLG1(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <ImageContainer />
        </Grid>
        <Grid item xs={4}>
          <ImageContainer />
          <SelectFormContainer />
        </Grid>
        <Grid item xs={4}>
          <AverageScoreContainer avgScoreType="PERSONAL" />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(PLG1);
