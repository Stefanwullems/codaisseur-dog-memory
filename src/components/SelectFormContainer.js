import React, { Component } from "react";
import SelectForm from "./SelectForm";
import { connect } from "react-redux";
class SelectFormContainer extends Component {
  state = {
    hasSelected: false
  };

  selectSomething = () => {
    console.log("select");
    this.setState({ hasSelected: true });
  };

  render() {
    return (
      <div>
        {this.props.currentDogs && (
          <SelectForm
            currentDogs={this.props.currentDogs}
            hasSelected={this.state.hasSelected}
            select={this.selectSomething}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ currentDogs, currentDog }) => {
  return {
    currentDogs,
    currentDog
  };
};

export default connect(mapStateToProps)(SelectFormContainer);
