import React, { Component } from "react";
import { Route } from "react-router-dom";
import PLGContainer from "./components/PLGContainer";
import HeaderContainer from "./components/HeaderContainer";
import FooterContainer from "./components/FooterContainer";
import HomepageContainer from "./components/HomepageContainer";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <Route exact path="/" component={HomepageContainer} />
        {this.props.showPL && (
          <Route path={`/playground/:level`} component={PLGContainer} />
        )}
        <FooterContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ showPL }) => ({ showPL });

export default connect(mapStateToProps)(App);
