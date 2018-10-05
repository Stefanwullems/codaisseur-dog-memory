import React, { Component } from "react";
import PLG from "./PLG";
import { connect } from "react-redux";
import { setCurrentDogs } from "../actions/currentDogs";
import { setLevel } from "../actions/level";
import { getDogs } from "../actions/dogData";
import { setPossibleDogs } from "../actions/possibleDogs";
import { getCurrentDog } from "../actions/currentDog";
import randomizeArray from "../scripts/randomizeArray";
import { resetStreak } from "../actions/streak";
import { increaseDifficulty } from "../actions/possibleDogLength";
import { completedFetch, startFetching } from "../actions/fetching";


class PLGContainer extends Component {
  componentDidUpdate() {
    if (this.props.fetching) {
      if (
        this.props.possibleDogs.length === 0 &&
        this.props.dogData.length !== 0
      ) {
        this.props.setPossibleDogs(
          [...this.props.dogData],
          this.props.possibleDogsLength
        );
      }
      if (
        this.props.currentDogs.length === 0 &&
        this.props.possibleDogs.length !== 0
      ) {
        this.props.setCurrentDogs([...this.props.possibleDogs]);
      }

      if (!this.props.currentDog && this.props.currentDogs.length !== 0) {
        this.props.getCurrentDog(
          randomizeArray([...this.props.currentDogs], 1)
        );
        this.props.completedFetch();
      }
    }
}

  componentDidMount() {
    this.props.setLevel(this.props.level);
    if (this.props.dogData.length === 0) {
      this.props.getDogs();
    }
    this.props.startFetching();
  }

  componentWillUnmount() {
    this.props.setPossibleDogs([], 0);
    this.props.setCurrentDogs([]);

    if (this.props.streak === 3) {
      this.props.resetStreak();
      this.props.increaseDifficulty();
    }
  }

  render() {
    return (
      <React.Fragment>
        <PLG warning={this.props.warning} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  dogData,
  warning,
  possibleDogs,
  currentDogs,
  streak,
  possibleDogsLength,
  fetching
}) => {
  return {
    currentDogs,
    dogData,
    warning,
    possibleDogs,
    streak,
    possibleDogsLength,
    fetching
  };
};

export default connect(
  mapStateToProps,

  {
    getCurrentDog,
    setPossibleDogs,
    setCurrentDogs,
    getDogs,
    setLevel,
    resetStreak,
    increaseDifficulty,
    completedFetch,
    startFetching
  }
)(PLGContainer);
