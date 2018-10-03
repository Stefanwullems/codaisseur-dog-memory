import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    justify:'center',
    alignItems:'center',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});


function SelectForm(props){
  const { dogs, classes } = props
    return(
      <div className={classes.root}>
      {dogs.map(generateDogList)}     
     </div>

    )
}

const generateDogList =(dog)=>{
  return(
    <React.Fragment key={dog.id}>
      <List component="nav">
      <ListItem>
        <ListItemText >{dog.breed}</ListItemText>
      </ListItem>
      </List>
      <Divider/>
    </React.Fragment>
  )
};

SelectForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectForm);