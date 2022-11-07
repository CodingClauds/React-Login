import React, { useState } from "react";
import "./LoginForm.scss";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>

          {/* Error handle display */}
          {error !== "" ? <div className="error">{error}</div> : ""}

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Wick"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johnwick@gmail.com"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="at least 8 characters"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>

          <div className="remember-me">
            <div className="remember-me__checkbox">
              <label className="remember-me__label" for="">
                <input
                  className="remember-me__input"
                  type="checkbox"
                  name="remember"
                  id="remember"
                  value="yes"
                />
                Keep me logged in
              </label>
            </div>
            <div className="forget">
              <a className="forget__password" href="/">
                Forgot Password?
              </a>
            </div>
          </div>

          <input className="login-btn" type="submit" value="LOGIN" />
        </div>
      </form>
    </>
  );
}

export default LoginForm;
