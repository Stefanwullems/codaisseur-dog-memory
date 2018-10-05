import React from "react";
import AverageScore from "./AverageScore";
import { connect } from "react-redux";
import { getOverall } from "../scripts/overallScore";

const data = null;

class AverageScoreContainer extends React.Component {
  state = {
    data: [{ key: "correct", value: 0 }, { key: "incorrect", value: 0 }]
  };
  componentDidMount() {
    if (this.props.avgScoreType === "OVERALL") {
      getOverall(this.setData);
    }
  }

  setData = data => {
    this.setState({ data });
  };

  calculateScorePercentages() {
    if (
      this.props.avgScoreType === "OVERALL" &&
      this.notInitial(this.state.data)
    ) {
      return this.calculate({
        ...JSON.parse(JSON.stringify(this.state.data))
      });
    } else if (
      this.props.avgScoreType === "PERSONAL" &&
      this.notInitial(this.props.averageScore)
    ) {
      return this.calculate([
        ...JSON.parse(JSON.stringify(this.props.averageScore))
      ]);
    } else return [0, 0];
  }

  calculate(score) {
    console.log(score);
    const correct = (100 / (score[0].value + score[1].value)) * score[0].value;
    const incorrect = 100 - correct;
    return [Math.round(correct * 100) / 100, Math.round(incorrect * 100) / 100];
  }

  notInitial = data => {
    return data[0].value !== 0 || data[1].value !== 0;
  };

  getScore() {
    if (
      this.props.avgScoreType === "OVERALL" &&
      this.notInitial(this.state.data)
    ) {
      return [{ ...this.state.data[0] }, { ...this.state.data[1] }];
    } else if (
      this.props.avgScoreType === "PERSONAL" &&
      this.notInitial(this.props.averageScore)
    ) {
      return [...JSON.parse(JSON.stringify(this.props.averageScore))];
    } else return [this.state.data[0], this.state.data[1]];
  }

  render() {
    return (
      <div>
        {this.props.averageScore && (
          <AverageScore
            percentages={this.calculateScorePercentages()}
            score={this.getScore()}
            avgScoreType={this.props.avgScoreType}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ averageScore }) => ({ averageScore });

export default connect(mapStateToProps)(AverageScoreContainer);
