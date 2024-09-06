import React from 'react';
import './Header.css';
import { FaHeadset, FaWhatsapp, FaUserCircle } from 'react-icons/fa'; // Icons used

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="TaxSpanner Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>Services <span>&#9662;</span></li>
          <li>Resources <span>&#9662;</span></li>
          <li>Company <span>&#9662;</span></li>
          <li>Tools and Calculators <span>&#9662;</span></li>
        </ul>
      </nav>
      <div className="actions">
      <span className="support">
          Support <FaHeadset />
        </span>
        <FaWhatsapp className="whatsapp-icon" />
        <FaUserCircle className="user-icon" />
        <button className="get-started-btn">Get started</button>
      </div>
    </header>
  );
};

export default Header;
