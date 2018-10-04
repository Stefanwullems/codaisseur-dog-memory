import React from "react";
import Image from "./Image";
import { connect } from "react-redux";

class ImageContainer extends React.Component {
  render() {
    return (
      <div>{this.props.dogData && <Image dogData={this.props.dogData} />}</div>
    );
  }
}

const mapStateToProps = ({ dogData }) => {
  return {
    dogData
  };
};

export default connect(mapStateToProps)(ImageContainer);
