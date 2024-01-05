// LoginForm.js

import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onLogin, onSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    console.log("Logging in with:", { username, password });
    onLogin(username, password);
  };

  return (
    <div className="login-form-container">
      <h1 className="app-title">
        PerfecTime
        <br />
        -Login-
      </h1>
      <div className="label-input-container">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="label-input-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={handleLoginClick}>Login</button>
        <button className="signup-button" onClick={onSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
