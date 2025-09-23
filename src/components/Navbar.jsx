import React from 'react';
import '../styles/components/Navbar.css';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { RiTiktokLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img 
          src="/images/logo.svg" 
          alt="Logo" 
          className="logo"
        />
      </div>
      
      <div className="social-icons">
        <a href="#" className="icon-link">
          <FaInstagram className="icon" />
        </a>
        <a href="#" className="icon-link">
          <FaFacebook className="icon" />
        </a>
        <a href="#" className="icon-link">
          <RiTiktokLine className="icon" />
        </a>
        <a href="#" className="icon-link">
          <FaYoutube className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;