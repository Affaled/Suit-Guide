import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <nav className="navegation">
        <img src="" alt="Logo" className="logo" />
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">Suit Guide</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
