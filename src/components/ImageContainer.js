import React from "react";
import Image from "./Image";
import { connect } from "react-redux";
import { getImages } from '../actions/getImages';


class ImageContainer extends React.Component {

  componentDidUpdate() {
    if(this.props.currentDog && !this.props.fetchedImages)
    this.props.getImages(this.props.currentDog)

  }

  render() {
    return (
      <div>
        <Image image={this.props.fetchedImages} />
      </div>
    );
  }
}

const mapStateToProps = ({ currentDog, fetchedImages }) => {

  return {
    currentDog,
    fetchedImages
  };
};

export default connect(
  mapStateToProps,
  { getImages }
)(ImageContainer);
