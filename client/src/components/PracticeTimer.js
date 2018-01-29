import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTime } from '../actions';

class PracticeTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timing: false
    };

    this.startTimer.bind(this);
    this.tick.bind(this);
  }

  componentDidMount() {
    this.setState({
      timing: false
    });
  }

  startTimer = () => {
    this.setState({
      timing: true,
      counter: 0
    });

    let timer = setInterval(this.tick, 1000);
  };

  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  updateTime = () => {
    this.props.updateTime(this.state.counter, () => {
      this.props.history.push('/new_log');
    });
  };

  render() {
    if (this.state.timing === false) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 center">
              <h2 className="sans-serif h2 weight-400">
                Practicing: "{this.props.log.category}"
              </h2>
              <button
                onClick={this.startTimer}
                className="submit-button sans-serif h5 weight-400"
              >
                Start Timer
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      var seconds = this.state.counter % 60;
      var minutes = Math.floor(this.state.counter / 60);

      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 center">
              <h2 className="sans-serif h2 weight-400">
                Practicing: "{this.props.log.category}"
              </h2>
              <h2 className="sans-serif h2 weight-300">
                {minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </h2>
              <button
                onClick={this.updateTime}
                className="submit-button sans-serif h5 weight-400"
              >
                Finish Practice
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    log: state.currentPractice
  };
}

export default connect(mapStateToProps, { updateTime })(PracticeTimer);
