import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import './common.css';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASS_REGEX = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/;

const formValid = formErrors => {
  let valid = true;

  Object.values( formErrors ).forEach(val => {
    val.length > 0 && ( valid = false );
  });

  return valid;
};


class App extends Component {
  constructor( props ) {
    super ( props );
    this.changeHandler  = this.changeHandler.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
    this.state = {
        email: '',
        password: '',
        formErrors: {
          email: '',
          password: '',
        }
    }

  }

  changeHandler = event => {
    console.log(event)
    const { name, value } = event.target;

    let formErrors = this.state.formErrors;

    switch (name) {
      case 'email':
        formErrors.email = EMAIL_REGEX.test( value ) ? ''
          : 'Invalid Email.' 
        break;
      case 'password':
        formErrors.password = PASS_REGEX.test( value ) ? ''
          : 'Password length should be 6-16 and contain at least one number/letter/symbol.';
        break;
    
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log( this.state ));
    // this.setState({
    //   formControls: {
    //     [name]: value
    //   }
    // });

  }
  handleSubmit = e => {
    e.preventDefault();
    let userData = this.state;

    if ( formValid( this.state.formErrors ) ){
      console.info( this.state );
    } else {
      console.error( 'err . . .' );
    }

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
                    noValidate
                    // value={this.state.email} 
                    onChange={this.changeHandler}
                  />
                  <label>Password</label>
                  <input type="password" 
                    name="password" 
                    noValidate
                    // value={this.state.password} 
                    onChange={this.changeHandler}
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
