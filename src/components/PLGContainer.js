import React, { Component } from "react";
import PLG1Container from "./PLG1Container";
import { connect } from "react-redux";
import { setCurrentDogs } from "../actions/setCurrentDogs";
import randomizeArray from "../scripts/randomizeArray";
import WarningContainer from "./WarningContainer";
import { shouldShowWarning } from "../actions/warning";
import request from 'superagent'
import { setDogs } from '../actions/setDogs';


class PLGContainer extends Component {
  componentDidMount() {
    this.props.setCurrentDogs(randomizeArray([...this.props.dogs], 3));
    this.props.shouldShowWarning();

    request.get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
            this.props.setDogs(Object.keys(response.body.message))})
    .catch(console.error)
  }

  render() {
    return (
      <React.Fragment>
        {this.props.showWarning && <WarningContainer />}
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
  { setCurrentDogs, shouldShowWarning, setDogs }
)(PLGContainer);
