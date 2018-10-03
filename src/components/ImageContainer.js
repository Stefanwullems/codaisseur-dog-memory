import React from "react";
import Image from "./Image";
import { connect } from 'react-redux';
import axios from 'axios';
import { setDogs } from '../actions/setDogs';


class ImageContainer extends React.Component {
 

  getDogs() {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(res => {
      console.log(res)
      this.props.setDogs(res.data.message)
    })
  }

  componentDidMount() {
    this.getDogs()
  }
  render() {
    return (
      <div>
        <Image dogData={this.props.dogData}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
dogData: state.dogData
  }
}

export default connect (mapStateToProps, { setDogs })(ImageContainer);
