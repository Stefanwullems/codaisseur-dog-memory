import React from "react";
import Header from "./Header";
import { showWarning } from "../actions/warning";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header
        warn={this.props.showWarning}
        shouldShowWarning={this.props.shouldShowWarning}
      />
    );
  }
}

const mapStateToProps = ({ warning }) => ({
  shouldShowWarning: warning.shouldShowWarning
});

export default connect(
  mapStateToProps,
  { showWarning }
)(HeaderContainer);
