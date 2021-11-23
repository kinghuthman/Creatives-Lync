import React from "react";
import { Link } from "react-router-dom";
import "./navbar.style.css";

export function Navbar() {
  return (
    <div className="linkContainer">
      <div className="title">
        <Link to="/" className="linkStyle">
          Huthman King{" "}
        </Link>
      </div>
      <div className="links">
        <Link to="/" className="linkStyle">
          Home{" "}
        </Link>
        <Link to="/about" className="linkStyle">
          About{" "}
        </Link>
        <Link to="/projects" className="linkStyle">
          Projects{" "}
        </Link>
        <Link to="/journal" className="linkStyle">
          Journal{" "}
        </Link>
        <Link to="/calendar" className="linkStyle">
          Calendar{" "}
        </Link>
        <Link to="/contact" className="linkStyle">
          Contact{" "}
        </Link>
      </div>
    </div>
  );
}
