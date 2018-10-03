import React from "react";
import Header from "./Header";
import { showWarningNotification } from "../actions/showNotification";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  render() {
    return <Header warn={this.props.showWarningNotification} />;
  }
}

export default connect(
  null,
  { showWarningNotification }
)(HeaderContainer);
