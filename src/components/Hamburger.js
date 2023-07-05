import React, { useState } from "react";
import "../App.css";
// import App from "../App";
// import Home from "./Home";
import { Link } from "react-router-dom";
const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div
        className={`nav-icon1 ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newtask">About</Link>
        </li>
        <li>
          <Link to="/todotask">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
