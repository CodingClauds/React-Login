import React, { useState } from "react";
import "./App.scss";
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
      setError("Please confirm login, details do not match.");
      console.log("Whommpwhompppwhompp");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
    console.log("Logout");
  };

  return (
    // Welcome Page once correct login has been implemented.
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2 className="welcome__title">
            Welcome, <span className="welcome__user">{user.name}</span>
          </h2>
          <div className="welcome__container">
            <p className="welcome__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quis perferendis quisquam sit suscipit similique, corporis
              repudiandae in, libero harum corrupti est facere doloribus.
              Eveniet corporis nemo quis modi nobis!
            </p>

            <p className="welcome__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quis perferendis quisquam sit suscipit similique, corporis
              repudiandae in, libero harum corrupti est facere doloribus.
              Eveniet corporis nemo quis modi nobis!
            </p>
          </div>
          <button className="welcome__button" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        // Else default render, when user is @ sign in page.
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
