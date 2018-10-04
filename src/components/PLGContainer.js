import React, { Component } from "react";
import PLG1Container from "./PLG1Container";
import { connect } from "react-redux";
import { setCurrentDogs } from "../actions/currentDogs";
import randomizeArray from "../scripts/randomizeArray";
import WarningContainer from "./WarningContainer";

import { getDogs } from "../actions/dogData";

import {
  shouldShowWarning,
  shouldntShowWarning,
  dontShowWarning
} from "../actions/warning";

class PLGContainer extends Component {
  componentDidMount() {

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
        <PLG1Container />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ dogData, warning }) => {
  return {
    dogData,
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
    getDogs
  }
)(PLGContainer);
