import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPractices } from '../actions';

class Logs extends Component {
  componentDidMount() {
    this.props.fetchPractices();
  }

  renderPracticeCards() {
    return this.props.logs.map((log, index) => {
      return (
        <Link key={index} className="no-link" to={`/logs/${log._id}`}>
          <div className="category-card sans-serif">
            <h3>{log.category}</h3>
            <h4>
              <i>{log.goal}</i>
            </h4>
          </div>
        </Link>
      );
    });
  }

  render() {
    if (this.props.logs === null) {
      return <div>Loading...</div>;
    }

    if (this.props.logs.length === 0) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1">
              <h2 className="h2 sans-serif">Active Practices: </h2>
              <p
                style={{ marginBottom: '20px' }}
                className="sans-serif h6 weight-300"
              >
                <i>No practices yet...</i>
              </p>
              <button
                className="sans-serif h5 submit-button"
                onClick={() => {
                  this.props.history.push('/new_practice');
                }}
              >
                Add Practice
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <h2 className="h2 sans-serif">Currently Practicing:</h2>
            {this.renderPracticeCards()}
            <button
              className="sans-serif h5 submit-button--long"
              onClick={() => {
                this.props.history.push('/new_practice');
              }}
            >
              Add Practice Category
            </button>
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
