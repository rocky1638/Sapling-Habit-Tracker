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
            Sapling
          </a>
        );
      case false:
        return (
          <a className="navbar-brand" href="/">
            Sapling
          </a>
        );
      default:
        return (
          <a className="navbar-brand" href="/dashboard">
            Sapling
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
        return (
          <li>
            <a className="nav-link" href="/auth/google">
              Sign Up
            </a>
          </li>
        );
      default:
        return [
          <li key="3">
            <Link className="nav-button" to="/new_practice">
              Start Practicing
            </Link>
          </li>,
          <li key="1">
            <Link className="nav-link" to="/logs">
              My Logs
            </Link>
          </li>,
          <li key="2">
            <a className="nav-link" href="/api/logout">
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
          <div className="navbar-header">
            <button
              type="button"
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
