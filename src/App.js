import React, { Component } from "react";
import { Route } from "react-router-dom";
import PLGContainer from "./components/PLGContainer";
import HeaderContainer from "./components/HeaderContainer";
import FooterContainer from "./components/FooterContainer";
import HomepageContainer from "./components/HomepageContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />

        <Route exact path="/" component={HomepageContainer} />
        <Route path="/playground" component={PLGContainer} />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
