import React, { Component } from "react";
import { connect } from "react-redux";
import { addDogs } from "../actions/addDogs";
import ImageContainer from "./ImageContainer";
import SelectFormContainer from "./SelectFormContainer";
import AverageScoreContainer from "./AverageScoreContainer";

class PLG1Container extends Component {
  render() {
    return (
      <div>
        <ImageContainer />
        <SelectFormContainer />
        {/* <AverageScoreContainer avgScoreType="PERSONAL" /> leave this commented out until all functionality is added*/}
      </div>
    );
  }
}

export default connect(
  null,
  { addDogs }
)(PLG1Container);
