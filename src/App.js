import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import PLGContainer from "./components/PLGContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Route exact path="/" component={HomePageContainer}>
        </Route> */}
        <Route path="/playground" component={PLGContainer}
        </Route>
      </div>
    );
  }
}

export default App;
