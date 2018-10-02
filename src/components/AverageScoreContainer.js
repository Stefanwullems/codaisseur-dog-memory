import React from "react";
import AverageScore from "./AverageScore";
import { connect } from "react-redux";

class AverageScoreContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.averageScore && (
          <AverageScore avgScore={this.props.averageScore} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ averageScore }) => ({ averageScore });

export default connect(mapStateToProps)(AverageScoreContainer);
