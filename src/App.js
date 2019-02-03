import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import './common.css';

class App extends Component {
  constructor( props ) {
    super ( props );
    this.changeHandler  = this.changeHandler.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
    this.state = {
        email: '',
        password: '' 
    }

    // var someProperty = { ...this.state.email }
    // someProperty.flag = true;
  }

  changeHandler = event => {
    console.log(event)
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        [name]: value
      }
    });

  }
  handleSubmit(e) {
    e.preventDefault();
    let userData = this.state;

    fetch('/fakeCall',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful - ", data);
        })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="q-login-page">
              <div className="form-area-login">
                <div className="logo">
                  <img src="" alt="Logo"/>
                </div>
                <form id="login-form" onSubmit={this.handleSubmit}>
                  <label>Email</label>
                  <input type="email" 
                    name="email" 
                    value={this.state.email} 
                    onChange={e => this.setState({ email : e.target.value })}
                  />
                  <label>Password</label>
                  <input type="password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={e => this.setState({password : e.target.value })}
                  />
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
