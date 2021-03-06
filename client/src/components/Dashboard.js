import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  renderButton() {
    if (!this.props.user.lastPracticed[0]) {
      return (
        <Link to="/logs">
          <button className="submit-button h5 sans-serif weight-400">
            Start Practicing!
          </button>
        </Link>
      );
    }

    return (
      <Link to={`/logs/${this.props.user.lastPracticed[0]._id}`}>
        <button className="submit-button h5 sans-serif weight-400">
          Practice Again!
        </button>
      </Link>
    );
  }
  render() {
    if (!this.props.user) {
      return <div>Loading...</div>;
    }

    const lp =
      this.props.user.lastPracticed[0] === undefined
        ? 'N/A'
        : this.props.user.lastPracticed[0].category;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <div className="col-xs-12 col-sm-6">
              <div className="box center">
                <div style={{ paddingTop: '20%' }} className="dashboard-card">
                  <h2 className="h2 sans-serif weight-300">Last Practiced: </h2>
                  <h2 className="h2 sans-serif weight-400">
                    <b>{lp}</b>
                  </h2>
                  {this.renderButton()}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="box ">
                <div className="dashboard-card">
                  <h3 className="h2 sans-serif weight-300 center">
                    Some Stats:{' '}
                  </h3>
                  <ul className="sans-serif h5 weight-300">
                    <li>Most Practiced: </li>
                    <li>Total Logs: </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth,
    practices: state.practices
  };
}

export default connect(mapStateToProps)(Dashboard);
