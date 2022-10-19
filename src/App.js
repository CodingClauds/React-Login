import React, { useState } from "react";
import LoginForm from "./components/Login/LoginForm";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged In");

      // Setting newState for logged in user
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match! Please confirm information");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
    console.log("Logout");
  };

  return (
    // If the user has input details, have a welcome form, if the user has not just display the plain loginForm
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
