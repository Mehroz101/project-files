import React, { useState } from "react";
import "../styles/Login.css";
const Login = () => {
  const [signup, setSignup] = useState(false);
  return (
    <>
      <div className="login_page">
        <div className="back_page_btn">
          <span>x</span>
        </div>
        <div className={signup ? `signup_container` : `login_container`}>
          <div className="login_left">
            <div className="login_logo"></div>
            <div className="login_details">
              <form action="">
                <h1> {signup ? "Create Account" : "Login to Your Account"}</h1>
                <div className="email_box box">
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="password_box box">
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="Enter your password" />
                </div>
                {signup ? (
                  <div className="password_box box">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" />
                  </div>
                ) : (
                  ""
                )}
                <div className="forget_pass">
                  {signup ? "" : <p>forget password?</p>}
                </div>
                <button>{signup? "Sign up" : "login"}</button>
              </form>
              <div className="dont_account">
                <p>
                  {signup
                    ? "Do you have an account?"
                    : "Don't have an account?"}
                  <span onClick={() => setSignup(!signup)}>
                    {signup ? "Signin here" : "Signup here"}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="login_right"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
