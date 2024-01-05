// SignupForm.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css";

function SignupForm({ onSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    console.log("Signing up with:", { username, password });
    onSignup(username, password);
    navigate("/"); // 회원가입 후 메인 페이지로 이동
  };

  const handleBackClick = () => {
    navigate(-1); // 뒤로 가기 버튼을 누르면 이전 페이지로 이동
  };

  return (
    <div className="signup-form-container">
      <h1 className="app-title">
        PerfecTime
        <br /> -Sign up-
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
        <button onClick={handleSignup}>Sign Up</button>
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
      </div>
    </div>
  );
}

export default SignupForm;
