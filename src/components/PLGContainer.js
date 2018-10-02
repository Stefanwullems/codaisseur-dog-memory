import React, { Component } from 'react';
import PLG1Container from "./PLG1Container";
import { connect } from 'react-redux'



class PLGContainer extends Component {




  render() {

    return (
      <div>
        <PLG1Container />
      </div>
    )
  }
}


const mapStateToProps =(state)=>{
  return {
    dogs:state.addDogsToStore
  }
}

export default connect (mapStateToProps)(PLGContainer)