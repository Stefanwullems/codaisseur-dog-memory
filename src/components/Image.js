import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";

const styles = {
  image: {
    width: 480,
    height: 300,
    paddingTop: 100
  }
};

const Images = props => {
  const { classes } = props;
  return (
    <Grid container alignItems="center" justify="center">
      <img
        className={classes.image}
        alt="dog"
        src={
          "https://images.dog.ceo/breeds/sheepdog-english/n02105641_10397.jpg"
        }
      />
    </Grid>
  );
};

export default withStyles(styles)(Images);
