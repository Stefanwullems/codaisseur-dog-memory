import React, { Component } from "react";
import PLG1Container from "./PLG1Container";
import { connect } from "react-redux";
import axios from 'axios';
import dogData from '../reducers/dogData';

class PLGContainer extends Component {
  state = {
    dogs: [ ]
  }

  getDogs() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      console.log(res)
      this.setState({
        dogs: res.data
      })
    })
  }

  componentDidMount() {
    this.getDogs()
  }
  render() {
    return (
      <div>
        <PLG1Container />
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    dogs: state.addDogsToStore
  };
};

export default connect(mapStateToProps)(PLGContainer);
