import React, { useState } from "react";
import LoginForm from "./components/Login/LoginForm";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  console.log(adminUser);

  // Initalize user state and error handling if user is not signed up.
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };

  const Logout = () => {
    console.log("Logout");
  };

  return <div className="App"></div>;
}

export default App;
