import React, { Component } from "react";
import PLG1Container from "./PLG1Container";
import { connect } from 'react-redux'
import { setCurrentDogs } from '../actions/setCurrentDogs'

class PLGContainer extends Component {

  componentDidMount() {
    console.log("here is where the function passed", this.props
    .setCurrentDogs(this.randomize()))
  }

  randomize = () => {
    const dogs = [...this.props.dogs];

    const randomDogs = [];

    do {
      randomDogs[randomDogs.length] =
        dogs.splice(Math.floor(Math.random() * dogs.length), 1)[0];
    } while (randomDogs.length < 4);


    return randomDogs
  };

  renderRandom = () => {
    const randomDogs = this.randomize()
    console.log("this is when the function is called inside render",randomDogs)
    return randomDogs.map((dog) => {
      return (
        <li key={dog.id}>ID ={dog.id} breed={dog.breed} url:{dog.imgurl}</li>
      )
    })
  }




  render() {
    return (<div/>
      )
  }
}

const mapStateToProps = state => {
  return {

    dogs: state.dogData
  }
}
export default connect(mapStateToProps, { setCurrentDogs })(PLGContainer)

