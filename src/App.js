import React, { Component } from "react";
import { Route } from "react-router-dom";
import PLGContainer from "./components/PLGContainer";
import HeaderContainer from "./components/HeaderContainer";
import FooterContainer from "./components/FooterContainer";
import HomepageContainer from "./components/HomepageContainer";
import WarningNotificationContainer from "./components/WarningNotificationContainer";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        {this.props.showWarningNotification && <WarningNotificationContainer />}
        <Route exact path="/" component={HomepageContainer} />
        <Route path="/playground" component={PLGContainer} />
        <FooterContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ showWarningNotification }) => ({
  showWarningNotification
});

export default connect(mapStateToProps)(App);
