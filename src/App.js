import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import './common.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="q-login-page">
              <div className="form-area-login">
                <div className="logo">
                  <img src="" />
                </div>
                <form id="login-form">
                  <label>Email</label>
                  <input type="email" />
                  <label>Password</label>
                  <input type="password" />
                  <div className="buttons-sign">
                    <div className="normal-sign-in" clear>
                      <div className="forgot-password">
                        <a>Forget password</a>
                      </div>
                      <div className="normal-signin-button-wrapper">
                        <button className="sign-in normal"><FontAwesomeIcon icon="sign-in-alt"/>Sign In</button>
                      </div>
                    </div>
                    
                    <div className="o-auth" clear>
                      <button className="sign-in google">
                        <FontAwesomeIcon icon={['fab', 'google']} />
                        <span className="hide-mobile">Sign In with </span>google
                      </button>
                      <button className="sign-in facebook"><FontAwesomeIcon icon={['fab', 'facebook-f']} /><span className="hide-mobile">Sign In with </span>Facebook</button>
                      <button className="sign-in linkedin"><FontAwesomeIcon icon={['fab', 'linkedin-in']}/><span className="hide-mobile">Sign In with </span>Linkedin</button>
                    </div>
                  </div>
                </form>
                <div className="form-option">
                  <a>Select Language</a>
                  <a>Help</a>
                  <a>Privacy policy</a>
                  <a>Terms</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
