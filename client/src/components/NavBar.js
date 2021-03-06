import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../actions';

class NavBar extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderLogo() {
    switch (this.props.user) {
      case null:
        return (
          <a className="navbar-brand" href="/">
            <img className="logo" src="/assets/logo.png" alt="Sapling Logo" />
          </a>
        );
      case false:
        return (
          <a className="navbar-brand" href="/">
            <img className="logo" src="/assets/logo.png" alt="Sapling Logo" />
          </a>
        );
      default:
        return (
          <a className="navbar-brand" href="/dashboard">
            <img className="logo" src="/assets/logo.png" alt="Sapling Logo" />
          </a>
        );
    }
  }

  renderNavLinks() {
    console.log(this.props.user);
    switch (this.props.user) {
      case null:
        return;
      case false:
        return;
      default:
        return [
          <li key="3">
            <a
              style={{ marginTop: '10px', color: '#eeeeee', cursor: 'pointer' }}
              className="sans-serif no-link nav-button"
              href="/new_practice"
            >
              Start Practicing
            </a>
          </li>,
          <li key="1">
            <a
              style={{ marginTop: '10px', color: '#eeeeee', cursor: 'pointer' }}
              className="no-link nav-link"
              href="/logs"
            >
              My Logs
            </a>
          </li>,
          <li key="2">
            <a
              style={{ marginTop: '10px' }}
              className="nav-link"
              href="/api/logout"
            >
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="navbar sans-serif">
        <div className="container-fluid">
          <div style={{ height: '70px' }} className="navbar-header">
            <button
              type="button"
              style={{ marginTop: '20px' }}
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            {this.renderLogo()}
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav" />
            <ul className="nav navbar-nav navbar-right nav-style">
              {this.renderNavLinks()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth
  };
}

export default connect(mapStateToProps, { fetchUser })(NavBar);
