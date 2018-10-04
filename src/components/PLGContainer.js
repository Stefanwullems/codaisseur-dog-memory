import React, { Component } from "react";
import PLG from "./PLG";
import { connect } from "react-redux";
import { setCurrentDogs } from "../actions/currentDogs";
import WarningContainer from "./WarningContainer";
import { setLevel } from "../actions/level";
import { getImages } from "../actions/getImages";
import { getDogs } from "../actions/dogData";
import { setPossibleDogs } from '../actions/possibleDogs';
import { setCurrentDog } from '../actions/currentDog';


import {
  shouldShowWarning,
  shouldntShowWarning,
  dontShowWarning
} from "../actions/warning";

class PLGContainer extends Component {



  componentDidUpdate() {
    if (this.props.possibleDogs.length === 0 && this.props.dogData.length !== 0) {
      this.props.setPossibleDogs([...this.props.dogData])

    }
    if (this.props.currentDogs.length === 0 && this.props.possibleDogs.length !== 0) {
      this.props.setCurrentDogs([...this.props.possibleDogs])
    }
    if (!this.props.currentDog && this.props.currentDogs.length !== 0) {
      this.props.setCurrentDog([...this.props.currentDogs])
    }
  }

  componentDidMount() {
    this.props.setLevel(this.props.level);
    this.props.getDogs();
    if (!this.props.warning.dontShowAgain) {
      this.props.shouldShowWarning();
    }

  }

  componentWillUnmount() {
    this.props.shouldntShowWarning();
    this.props.dontShowWarning();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.warning.show && <WarningContainer />}
        <PLG />
      </React.Fragment>
    );
  }
}



const mapStateToProps = ({ dogData, warning, possibleDogs, currentDogs }) => {
  return {
    currentDogs,
    dogData,
    warning,
    possibleDogs
  };

};

export default connect(
  mapStateToProps,

  {
    setCurrentDog,
    setPossibleDogs,
    setCurrentDogs,
    shouldShowWarning,
    shouldntShowWarning,
    dontShowWarning,
    getDogs,
    setLevel,
    getImages
  }
)(PLGContainer);
