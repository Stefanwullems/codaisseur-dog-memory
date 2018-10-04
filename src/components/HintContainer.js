import React from "react"
import Hint from "./Hint"
import { connect } from "react-redux"


class HintContainer extends React.Component{

  render() {
    return (
      <Hint/>
    );
  }

}

const mapStateToProps = ({ currentDog }) => ({ currentDog });


export default connect(mapStateToProps)(HintContainer);
