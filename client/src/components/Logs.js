import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPractices } from '../actions';

class Logs extends Component {
  componentDidMount() {
    this.props.fetchPractices();
    console.log('logs', this.props.logs);
  }

  renderPracticeCards() {
    return this.props.logs.map((log, index) => {
      return (
        <div key={index} className="category-card sans-serif">
          <h3>{log.category}</h3>
          <h4>
            <i>{log.goal}</i>
          </h4>
        </div>
      );
    });
  }

  render() {
    if (!this.props.logs[0]) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <h2 className="h2 sans-serif">Currently Practicing:</h2>
            {this.renderPracticeCards()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    logs: state.practices
  };
}

export default connect(mapStateToProps, { fetchPractices })(Logs);
