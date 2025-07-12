import React from 'react';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ABC Company</div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="/cms">
          <button className="admin-btn">Admin</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
