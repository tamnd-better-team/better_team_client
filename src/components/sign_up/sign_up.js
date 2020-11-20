import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../../styles/sign_in.scss';

class SignUp extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign Up</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input type="text" id="inputName" className="form-control" placeholder="Name" required autofocus />
                    <label for="inputName">Name</label>
                  </div>

                  <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                    <label for="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <label for="inputPassword">Password</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="inputPasswordConfirmation" className="form-control" placeholder="Password confirmation" required />
                    <label for="inputPasswordConfirmation">Password confirmation</label>
                  </div>

                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign up</button>
                  <div className="sign-up-div">
                    <Link to = "/sign_in">Sign in</Link>
                  </div>
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
