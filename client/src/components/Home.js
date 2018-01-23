import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            style={{ marginTop: '10%' }}
            className="col-xs-10 col-xs-offset-1"
          >
            <div style={{ marginTop: '10%' }} className="col-xs-12 col-sm-6">
              <h1 className="weight-400 sans-serif">
                Make the most of your practice.
              </h1>
              <div className="row">
                <div
                  style={{ paddingRight: '0px' }}
                  className="col-xs-12 col-sm-5"
                >
                  <h2 className="sans-serif weight-300">Sign up now:</h2>
                </div>
                <div className="col-xs-12 col-sm-7">
                  <a href="/auth/google">
                    <button className="loginBtn loginBtn--google">
                      Login with Google
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ marginTop: '5%' }}
              className="sans-serif col-xs-12 col-sm-6"
            >
              <div style={{ marginTop: '15px' }} className="row">
                <div className="col-xs-4">
                  <img
                    className="landing-icon"
                    src="/assets/guitar.png"
                    alt="Guitar Logo"
                  />
                </div>
                <div className="col-xs-8">
                  <h3 style={{ marginTop: '0px' }}>Set Goals</h3>
                  <h4 className="weight-200">
                    Set practice goals to hold yourself to practicing
                    consistently.
                  </h4>
                </div>
              </div>
              <div style={{ marginTop: '15px' }} className="row">
                <div className="col-xs-4">
                  <img
                    className="landing-icon"
                    src="/assets/contract.png"
                    alt="Guitar Logo"
                  />
                </div>
                <div className="col-xs-8">
                  <h3 style={{ marginTop: '0px' }}>Track Progress</h3>
                  <h4 className="weight-200">
                    Keep track of progress and struggles, to make next practice
                    more efficient.
                  </h4>
                </div>
              </div>
              <div style={{ marginTop: '15px' }} className="row">
                <div className="col-xs-4">
                  <img
                    className="landing-icon"
                    src="/assets/lightbulb.png"
                    alt="Guitar Logo"
                  />
                </div>
                <div className="col-xs-8">
                  <h3 style={{ marginTop: '0px' }}>Realize Your Potential</h3>
                  <h4 className="weight-200">
                    With consistent and deliberate practice, anyone can realize
                    their goals!
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
