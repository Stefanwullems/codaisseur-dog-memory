import React from "react";
import Image from "./Image";
import { connect } from "react-redux";
import { getImages } from "../actions/getImages";
class ImageContainer extends React.Component {
  componentDidMount() {
    this.props.getImages(`${this.props.dogData[0]}`);
  }

  render() {
    return (
      <div>
        <Image image={this.props.fetchedImages} />
      </div>
    );
  }
}

const mapStateToProps = ({ dogData, fetchedImages }) => {
  return {
    dogData,
    fetchedImages
  };
};

export default connect(
  mapStateToProps,
  { getImages }
)(ImageContainer);
