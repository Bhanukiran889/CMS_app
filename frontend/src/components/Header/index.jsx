import React from "react";
import "./index.css";
import logo from "../../assets/dropdown icon.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <nav className="nav-links">
          <a href="#about">About</a>
          <div className="services-dropdown">
            <a href="#services">Services</a>
            <img src={logo} alt="dropdown" width={12} />
          </div>
        </nav>

        <a href="/cms">
          <button className="admin-btn">Admin</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
