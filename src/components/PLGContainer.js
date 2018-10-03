import React, { Component } from "react";
import PLG1Container from "./PLG1Container";
import { connect } from "react-redux";
import { setCurrentDogs } from "../actions/setCurrentDogs";
import randomizeArray from "../scripts/randomizeArray";

class PLGContainer extends Component {
  componentDidMount() {
    this.props.setCurrentDogs(randomizeArray([...this.props.dogs], 3));
  }

  render() {
    return <PLG1Container />;
  }
}

const mapStateToProps = state => {
  return {
    dogs: state.dogData
  };
};
export default connect(
  mapStateToProps,
  { setCurrentDogs }
)(PLGContainer);
