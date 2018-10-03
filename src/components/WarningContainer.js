import React from "react";
import Warning from "./Warning";
import { neverShowWarningAgain, showWarningAgain } from "../actions/warning";
import { connect } from "react-redux";

class WarningContainer extends React.Component {
  toggleShowWarningNextTime = e => {
    console.log(e.target.checked === true);
    if (e.target.checked === true) {
      console.log("hi");
      this.props.neverShowWarningAgain();
    } else {
      this.props.showWarningAgain();
    }
  };

  render() {
    return (
      <Warning toggleShowWarningNextTime={this.toggleShowWarningNextTime} />
    );
  }
}

export default connect(
  null,
  { neverShowWarningAgain, showWarningAgain }
)(WarningContainer);
