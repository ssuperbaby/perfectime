// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Main from "./Main";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent"; // EditEvent 컴포넌트를 import 합니다.
import "./LoadingScreen.css";
import { EventProvider } from "./EventContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { id: "user1", password: "pass1" },
      { id: "user2", password: "pass2" },
    ]);

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleSignup = (id, password) => {
    setUsers([...users, { id, password }]);
  };

  const handleLogin = (id, password) => {
    const user = users.find(
      (user) => user.id === id && user.password === password
    );
    if (user) {
      window.location.href = "/main";
    } else {
      alert("아이디와 비밀번호를 잘못 입력했습니다.");
    }
  };

  return (
    <Router>
      <div className="app-container">
        {isLoading ? (
          <div className="loading-screen">
            <div className="loading-content">
              <h2 className="loading-text">PerfectTime</h2>
            </div>
          </div>
        ) : (
          <EventProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <LoginForm
                    onLogin={handleLogin}
                    onSignup={() => (window.location.href = "/signup")}
                  />
                }
              />
              <Route
                path="/signup"
                element={<SignupForm onSignup={handleSignup} />}
              />
              <Route path="/main" element={<Main />} />
              <Route path="/add-event" element={<AddEvent />} />
              <Route path="/edit-event" element={<EditEvent />} />{" "}
              {/* EditEvent 경로 추가 */}
            </Routes>
          </EventProvider>
        )}
      </div>
    </Router>
  );
}

export default App;
