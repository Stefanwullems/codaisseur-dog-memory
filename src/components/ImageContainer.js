import React from "react";
import Image from "./Image";
import { connect } from "react-redux";

class ImageContainer extends React.Component {
  render() {
    return (
      <div>
        <Image dogData={this.props.dogData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogData: state.dogData
  };
};

export default connect(
  mapStateToProps,
)(ImageContainer);

