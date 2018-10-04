import React, { Component } from "react";
import PLG from "./PLG";
import { connect } from "react-redux";
import { setCurrentDogs } from "../actions/currentDogs";
import WarningContainer from "./WarningContainer";
import { setLevel } from "../actions/level";
import { getImages } from '../actions/getImages';
import { getDogs } from "../actions/dogData";
import {
  shouldShowWarning,
  shouldntShowWarning,
  dontShowWarning
} from "../actions/warning";

class PLGContainer extends Component {


    
  componentDidMount() {
    this.props.setLevel(this.props.match.params.level);
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

const mapStateToProps = ({ dogData, warning, SCD }) => {

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
    getDogs,
    setLevel,
    getImages

  }
)(PLGContainer);
