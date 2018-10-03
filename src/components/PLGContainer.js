import React, { Component } from "react";
import PLG1Container from "./PLG1Container";
import { connect } from "react-redux";
import { setCurrentDogs } from "../actions/setCurrentDogs";
import randomizeArray from "../scripts/randomizeArray";
import WarningContainer from "./WarningContainer";
import { getDogs } from '../actions/getDogs';
import {
  shouldShowWarning,
  shouldntShowWarning,
  dontShowWarning
} from "../actions/warning";


class PLGContainer extends Component {
  componentDidMount() {
    this.props.setCurrentDogs(randomizeArray([...this.props.dogs], 3));

    this.props.shouldShowWarning();
    
    this.props.getDogs()

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
    dogs: dogData,
    warning
  };
};

export default connect(
  mapStateToProps,
  { setCurrentDogs, shouldShowWarning, shouldntShowWarning, dontShowWarning, getDogs }
)(PLGContainer);
