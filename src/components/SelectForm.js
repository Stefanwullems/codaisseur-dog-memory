import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});


function SelectForm(props){
  const { dogs, classes } = props

    return(
      <div className={classes.root}>
      <ListItem>
        <ListItemText>
          {dogs[0]}
        </ListItemText>
      </ListItem>
      <Divider/>
      <ListItem>
         <ListItemText>
            {dogs[1]}
        </ListItemText>
      </ListItem>
      <Divider/>
      <ListItem>
      <ListItemText>
            {dogs[2]}
      </ListItemText>
      </ListItem>
     </div>

    )
}

SelectForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectForm);