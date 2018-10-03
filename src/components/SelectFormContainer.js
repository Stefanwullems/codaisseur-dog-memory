import React, { Component } from "react";
import SelectForm from './SelectForm'
import { connect } from 'react-redux'
class SelectFormContainer extends Component {


  render() {

    return(<div>
      {this.props.dogs && <SelectForm dogs={this.props.dogs}/>}
    </div>
    )
  };
};

const mapStateToProps = (state) =>{
  return {
    dogs:state.SCD
  };
}; 

export default connect(mapStateToProps)(SelectFormContainer);
