import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Send a POST request to the authentication endpoint
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { token } = await response.json();

      // Store the token in local storage or session storage
      localStorage.setItem("token", token);

      // Update the authentication state
      setLoggedIn(true);
    } else {
      // Handle authentication error
      console.log("Login failed");
    }
  };

  const handleLogout = () => {
    // Remove the token from storage
    localStorage.removeItem("token");

    // Update the authentication state
    setLoggedIn(false);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;