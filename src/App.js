import React, { Component } from 'react';
import {Route} from "react-router-dom";
import PLGContainer from "./components/PLGContainer";
import HeaderContainer from "./components/HeaderContainer";
import FooterContainer from "./components/FooterContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
       <HeaderContainer />
        {/* <Route exact path="/" component={HomePageContainer}>
        </Route> */}
        <Route path="/playground" component={PLGContainer}>
        </Route>
        <FooterContainer></FooterContainer>

      </div>
    );
  }
}

export default App;
