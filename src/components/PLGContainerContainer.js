import React from "react";
import PLGContainer from "./PLGContainer";
import { connect } from "react-redux";
import AverageScoreContainer from "./AverageScoreContainer";
import Grid from "@material-ui/core/Grid";
import CircularIndeterminate from "./CircularIndeterminate";
import { resetScore } from "../actions/average-score";
import {
  shouldShowWarning,
  shouldntShowWarning,
  dontShowWarning
} from "../actions/warning";

class PLGContainerContainer extends React.Component {
  componentDidMount() {
    if (!this.props.warning.dontShowAgain) {
      this.props.shouldShowWarning();
    }
  }

  componentWillUnmount() {
    this.props.resetScore();
    this.props.shouldntShowWarning();
    this.props.dontShowWarning();
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={8}>
            {this.props.showPL && (
              <PLGContainer level={this.props.match.params.level} />
            )}
            {!this.props.showPL && <CircularIndeterminate />}
          </Grid>
          <Grid item xs={4}>
            <AverageScoreContainer avgScoreType="PERSONAL" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ showPL, warning }) => ({ showPL, warning });

export default connect(
  mapStateToProps,
  {
    resetScore,
    shouldntShowWarning,
    dontShowWarning,
    shouldShowWarning
  }
)(PLGContainerContainer);
