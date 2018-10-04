import React from "react";
import Image from "./Image";
import { connect } from "react-redux";

class ImageContainer extends React.Component {
  render() {
    return (
      <div>
        <Image image={this.props.currentDog.img} />
      </div>
    );
  }
}

const mapStateToProps = ({ currentDog }) => {
  return {
    currentDog
  };
};

export default connect(mapStateToProps)(ImageContainer);
