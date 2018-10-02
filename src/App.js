import React, { Component } from "react";

import HeaderContainer from "./components/HeaderContainer";
import FooterContainer from "./components/FooterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />


        <FooterContainer></FooterContainer>
      </div>
    );
  }
}

export default App;
