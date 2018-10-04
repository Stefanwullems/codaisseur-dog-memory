import React from "react";
import Option from "./Option";
import { connect } from "react-redux";
import { startShowingPL, hidePL } from "../actions/showPL";

class OptionContainer extends React.Component {
  state = {
    hasClicked: false,
    isCorrect: false
  };

  redirect = () => {
    this.props.hidePL();
    setTimeout(this.props.startShowingPL, 3000);
  };

  checkIfIsCorrect = () => {
    this.setState({ hasClicked: true });
    if (this.props.dog === this.props.currentDog) {
      this.setState({ isCorrect: true });
    } else {
      this.setState({ isCorrect: false });
    }
  };

  render() {
    return (
      <Option
        dog={this.props.dog}
        checkIfIsCorrect={this.checkIfIsCorrect}
        level={this.props.level}
        redirect={this.redirect}
        hasClicked={this.state.hasClicked}
        isCorrect={this.state.isCorrect}
      />
    );
  }
}

const mapStateToProps = ({ level }) => ({ level });

export default connect(
  mapStateToProps,
  { startShowingPL, hidePL }
)(OptionContainer);
