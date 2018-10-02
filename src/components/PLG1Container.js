import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDogs } from '../actions/addDogs'

<<<<<<< HEAD
=======
import ImageContainer from './ImageContainer'
import SelectFormContainer from './SelectFormContainer'
>>>>>>> 7c586ee6454c058b8d5be073a9872c9e8b2c52fc

class PLG1Container extends Component {
  render() {
    return (
      <div>
        <ImageContainer></ImageContainer>
        <SelectFormContainer></SelectFormContainer>
      </div>
    )
  }
}

export default connect (null,{addDogs})(PLG1Container)