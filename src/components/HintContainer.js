import React from "react"
import Hint from "./Hint"
import { connect } from "react-redux"
import randomizeArray from "../scripts/randomizeArray"


class HintContainer extends React.Component{

  render() {
      return (<React.Fragment>
     {this.props.currentDog.currentDog && <Hint hint={randomizeArray(this.props.currentDog.currentDog.split(''), 3)}/>}
     </React.Fragment> );
  }

}

const mapStateToProps = ({ currentDog }) => ({ currentDog });


export default connect(mapStateToProps)(HintContainer);
