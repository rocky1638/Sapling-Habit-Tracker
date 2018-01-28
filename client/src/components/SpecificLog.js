import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategory } from '../actions';

class SpecificLog extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchCategory(id);
  }

  renderLogs() {
    return this.props.log.childrenLogs.map((current, index) => {
      var date = new Date(current.createdAt);
      var dateString = date.toDateString();

      return (
        <div className="category-card">
          <h4 className="h5 weight-400">
            <b>{dateString}</b>
          </h4>
          <h4>{current.description}</h4>
        </div>
      );
    });
  }

  render() {
    if (!this.props.log.childrenLogs) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }

    if (this.props.log.childrenLogs.length === 0) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1">
              <h2 className="sans-serif h2 weight-400">
                Practice Logs For: "{this.props.log.category}"
              </h2>
              <h4>
                <i>No logs yet... Get practicing!</i>
              </h4>
              <Link to="/new_log">
                <button className="sans-serif h5 weight-400 submit-button">
                  Log Practice
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <h2 className="sans-serif h2 weight-400">
              Practice Logs For: "{this.props.log.category}"
            </h2>
            {this.renderLogs()}
            <Link to="/new_log">
              <button className="h5 weight-400 sans-serif submit-button--long">
                Log Practice
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    log: state.currentPractice
  };
}

export default connect(mapStateToProps, { fetchCategory })(SpecificLog);
