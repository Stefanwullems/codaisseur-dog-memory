import React, { Component } from "react";
import { Route } from "react-router-dom";
import PLGContainerContainer from "./components/PLGContainerContainer";
import HeaderContainer from "./components/HeaderContainer";
import FooterContainer from "./components/FooterContainer";
import HomepageContainer from "./components/HomepageContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <Route exact path="/" component={HomepageContainer} />
        <Route
          exact
          path={`/playground/:level`}
          component={PLGContainerContainer}
        />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
