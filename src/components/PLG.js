import React from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ImageContainer from "./ImageContainer";
import SelectFormContainer from "./SelectFormContainer";
import WarningContainer from "./WarningContainer";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: "3vh"
  }
};

function PLG1(props) {
  const { classes, warning } = props;
  return (
    <React.Fragment>
      {warning.show && <WarningContainer />}
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            {/* <ImageContainer /> */}
          </Grid>
          <Grid item xs={6}>
            <ImageContainer />
            <SelectFormContainer />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(PLG1);
