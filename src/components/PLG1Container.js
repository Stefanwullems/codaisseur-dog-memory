import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDogs } from '../actions/addDogs'


class PLG1Container extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect (null,{addDogs})(PLG1Container)