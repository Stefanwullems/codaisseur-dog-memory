import React from "react"
import { withStyles, Button, Tooltip} from "@material-ui/core";

const styles = {
  btndisabled: {
    width: "35vw",
    height: "12vh",
    color: "white",
    fontWeight: 700,
    fontSize: 50
  },
  toolTip:{
    fontWeight: 700,
    fontSize: 50
  }

}


function Hint(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
    <Tooltip  classes={{ tooltip: classes.toolTip }} title="aff.....">
      <span>
        <Button disabled className={classes.btndisabled}>Need a hint?</Button>
      </span>
    </Tooltip>
    </div>
  );
}


export default withStyles(styles)(Hint);