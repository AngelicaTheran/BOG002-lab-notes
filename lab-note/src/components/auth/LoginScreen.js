import React from "react";
import {Link} from "react-router-dom"

const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">LoginScreen</h3>
      <form>
        <input type="email" placeholder="Email" name="email" autoComplete="off" className="auth__input" />
        <input type="password" placeholder="Password" name="password" autoComplete="off" className="auth__input" />

        <button type="submit" className="btn btn-primary btn-block" >Login</button>
        
        <div className="auth__social-networks">
          <p>login with social networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link 
        to="/auth/register"
        className="link"
        >
            Create new Account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
