import React, { Component } from "react";
import PLG1Container from "./PLG1Container";
import { connect } from "react-redux";
import { setCurrentDogs } from "../actions/setCurrentDogs";
import randomizeArray from "../scripts/randomizeArray";
import WarningContainer from "./WarningContainer";
import { getDogs } from '../actions/getDogs';
import { getImages } from '../actions/getImages';

import {
  shouldShowWarning,
  shouldntShowWarning,
  dontShowWarning
} from "../actions/warning";

class PLGContainer extends Component {

    


  componentDidMount() {

    this.props.setCurrentDogs(randomizeArray([...this.props.dogs], 3));
    this.props.shouldShowWarning();
    this.props.getDogs();
    
    
    if (!this.props.warning.dontShowAgain) {
      this.props.shouldShowWarning();
    }

    this.props.getImages(`${this.props.dogs[0].breed}`)
    
    
  
  }

  componentWillUnmount() {
    this.props.shouldntShowWarning();
    this.props.dontShowWarning();
  }

  render() {

    return (
      <React.Fragment>
        {this.props.warning.show && <WarningContainer />}
        <PLG1Container />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ dogData, warning, SCD }) => {

  return {
    dogs: dogData,
    currentDog:SCD,
    warning
  };
  
};

export default connect(
  mapStateToProps,


  {
    setCurrentDogs,
    shouldShowWarning,
    shouldntShowWarning,
    dontShowWarning,
    getDogs,
    getImages
  }

)(PLGContainer);
