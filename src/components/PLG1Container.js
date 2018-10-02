import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDogs } from '../actions/addDogs'
import ImageContainer from './ImageContainer'
import SelectFormContainer from './SelectFormContainer';


class PLG1Container extends Component {
  render() {
    return (
      <div>
        <ImageContainer></ImageContainer>
        <SelectFormContainer/>>
      </div>
    )
  }
}

export default connect (null,{addDogs})(PLG1Container)