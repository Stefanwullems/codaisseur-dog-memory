import React from "react";
import Option from "./Option";
import { connect } from "react-redux";
import { startShowingPL, hidePL } from "../actions/showPL";

class OptionContainer extends React.Component {
  redirect = () => {
    this.props.hidePL();
    setTimeout(this.props.startShowingPL, 0);
  };

  render() {
    console.log(this.props);
    return (
      <Option
        dog={this.props.dog}
        level={this.props.level}
        redirect={this.redirect}
      />
    );
  }
}

const mapStateToProps = ({ level }) => ({ level });

export default connect(
  mapStateToProps,
  { startShowingPL, hidePL }
)(OptionContainer);
