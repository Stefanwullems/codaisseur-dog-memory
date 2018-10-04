import React from "react";
import Image from "./Image";
import { connect } from "react-redux";
import { getImages } from '../actions/getImages';
class ImageContainer extends React.Component {

  
  render() {
    return (
      <div>
        <Image image={this.props.image} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogData: state.dogData,
    image:state.fetchedImages
  };
};

export default connect(
  mapStateToProps,
  {getImages}
)(ImageContainer);

