import React from "react";
import Option from "./Option";
import { connect } from "react-redux";
import { startShowingPL, hidePL } from "../actions/showPL";
import { incrementCorrect, incrementIncorrect } from "../actions/average-score";
import { incrementStreak, resetStreak } from "../actions/streak";

class OptionContainer extends React.Component {
  state = {
    hasClicked: false,
    isCorrect: false
  };

  componentDidUpdate() {
    if (
      this.props.hasSelected &&
      this.props.dog === this.props.currentDog.currentDog &&
      !this.state.hasClicked
    ) {
      this.setState({ hasClicked: true });
      this.setState({ isCorrect: true });
    }
  }
  redirect = () => {
    this.props.hidePL();
    setTimeout(this.props.startShowingPL, 1000);
  };

  checkIfIsCorrect = () => {
    this.setState({ hasClicked: true });
    this.props.select();
    if (this.props.dog === this.props.currentDog.currentDog) {
      this.setState({ isCorrect: true });
      this.props.incrementStreak();
      this.props.incrementCorrect();
    } else {
      this.props.incrementIncorrect();
      this.props.resetStreak();
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

const mapStateToProps = ({ level, currentDog }) => ({ level, currentDog });

export default connect(
  mapStateToProps,
  {
    startShowingPL,
    hidePL,
    incrementCorrect,
    incrementIncorrect,
    incrementStreak,
    resetStreak
  }
)(OptionContainer);
