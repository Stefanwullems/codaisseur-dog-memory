import React, { Component } from "react";
import PLG from "./PLG";
import { connect } from "react-redux";
import { setCurrentDogs } from "../actions/currentDogs";
import { setLevel } from "../actions/level";
import { getDogs } from "../actions/dogData";
import { setPossibleDogs } from "../actions/possibleDogs";
import { getCurrentDog } from "../actions/currentDog";
import randomizeArray from "../scripts/randomizeArray";

import {
  shouldShowWarning,
  shouldntShowWarning,
  dontShowWarning
} from "../actions/warning";

class PLGContainer extends Component {
  componentDidUpdate() {
    if (
      this.props.possibleDogs.length === 0 &&
      this.props.dogData.length !== 0
    ) {
      this.props.setPossibleDogs([...this.props.dogData]);
    }
    if (
      this.props.currentDogs.length === 0 &&
      this.props.possibleDogs.length !== 0
    ) {
      this.props.setCurrentDogs([...this.props.possibleDogs]);
    }
    if (!this.props.currentDog && this.props.currentDogs.length !== 0) {
      this.props.getCurrentDog(randomizeArray([...this.props.currentDogs], 1));
    }
  }

  componentDidMount() {
    this.props.setLevel(this.props.level);
    if (this.props.dogData.length === 0) this.props.getDogs();
    if (!this.props.warning.dontShowAgain) this.props.shouldShowWarning();
  }

  componentWillUnmount() {
    this.props.shouldntShowWarning();
    this.props.dontShowWarning();
    this.props.setPossibleDogs([...this.props.dogData]);
    this.props.setCurrentDogs([...this.props.possibleDogs]);
    this.props.getCurrentDog(randomizeArray([...this.props.currentDogs], 1));
  }

  render() {
    return (
      <React.Fragment>
        <PLG warning={this.props.warning} />
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
    getCurrentDog,
    setPossibleDogs,
    setCurrentDogs,
    shouldShowWarning,
    shouldntShowWarning,
    dontShowWarning,
    getDogs,
    setLevel
  }
)(PLGContainer);
