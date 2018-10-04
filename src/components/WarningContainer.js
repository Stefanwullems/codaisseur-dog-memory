import React from "react";
import Warning from "./Warning";
import {
  neverShowWarningAgain,
  showWarningAgain,
  dontShowWarning,
  shouldntShowWarning,
  shouldShowWarning
} from "../actions/warning";
import { connect } from "react-redux";

class WarningContainer extends React.Component {
  toggleShowWarningNextTime = e => {
    console.log(e.target.checked === true);
    if (e.target.checked === true) {
      this.props.neverShowWarningAgain();
      this.props.shouldntShowWarning();
    } else {
      this.props.showWarningAgain();
      this.props.shouldShowWarning();
    }
  };

  render() {
    return (
      <Warning
        toggleShowWarningNextTime={this.toggleShowWarningNextTime}
        hideWarning={this.props.dontShowWarning}
      />
    );
  }
}

export default connect(
  null,
  {
    neverShowWarningAgain,
    showWarningAgain,
    dontShowWarning,
    shouldntShowWarning,
    shouldShowWarning
  }
)(WarningContainer);
