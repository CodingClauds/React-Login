import React from "react";

function LoginForm() {
  return (
    <>
      {/* form-container */}
      <div className="form-inner">
        <h2>Login</h2>
        {/* form-content */}
        <div className="form-group">
          <label htmlFor="name">name:</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="form-group">
          <label htmlFor="name">name:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="login-here@gmail.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">password:</label>
          <input type="text" name="password" id="password" />
        </div>
      </div>
    </>
  );
}

export default LoginForm;
