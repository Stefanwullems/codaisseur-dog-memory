import React, { Component } from 'react';
import PLG1Container from "./PLG1Container";
import { connect } from 'react-redux'
import { setCurrentDogs } from '../actions/setCurrentDogs'

class PLGContainer extends Component {

  componentDidMount(){
    this.props.setCurrentDogs(this.randomize())
  }

  randomize = () => {
    const dogs = this.props.dogs;

    const randomDogs = [];

    do {
      randomDogs[randomDogs.length] =
        dogs.splice(Math.floor(Math.random() * dogs.length),1)[0];
    } while (randomDogs.length < 4);

    return randomDogs
  };

  renderRandom = () => {
    const randomDogs = this.randomize()

    return randomDogs.map((dog) => {
      return (
        <li key = {dog.id}>ID ={dog.id} breed={dog.breed} url:{dog.imgurl}</li>
      )
    })
  }

  

  render() {

    return (

      <div>
        <PLG1Container />
        <div className="randomdogs test">
          <ul>
          <h3> random function test</h3>
            {this.renderRandom()}
          </ul>
        </div>
      </div>
    )
  };
};


const mapStateToProps = (state) => {
  return {
    dogs: state.dogData
  }
}
export default connect(mapStateToProps,{setCurrentDogs})(PLGContainer)