import React from "react";
import PLGContainer from "./PLGContainer";
import { connect } from "react-redux";
import AverageScoreContainer from "./AverageScoreContainer";
import Grid from "@material-ui/core/Grid";

class PLGContainerContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={8}>
            {this.props.showPL && (
              <PLGContainer level={this.props.match.params.level} />
            )}
          </Grid>
          <Grid item xs={4}>
            <AverageScoreContainer avgScoreType="PERSONAL" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ showPL }) => ({ showPL });

export default connect(mapStateToProps)(PLGContainerContainer);
