import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SpecificLog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      log: {}
    };
  }
  componentDidMount() {
    console.log('hello');
    const { id } = this.props.match.params;
    console.log('log.id: ', id);

    axios
      .get('/api/fetch_logs', {
        params: {
          id
        }
      })
      .then(res => this.setState({ log: res.data }));
  }

  render() {
    if (!this.state.log.childrenLogs) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }

    if (this.state.log.childrenLogs.length === 0) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1">
              <h2 className="sans-serif h2 weight-400">
                Practice Logs For: "{this.state.log.category}"
              </h2>
              <h4>
                <i>No logs yet... Get practicing!</i>
              </h4>
              <Link to="/new_log">
                <button className="submit-button">Log Practice</button>
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
              Practice Logs For: "{this.state.log.category}"
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecificLog;
