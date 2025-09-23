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
        <a href="https://www.instagram.com/mekano_labs/?fbclid=IwY2xjawM_fnlleHRuA2FlbQIxMQBicmlkETFQN0swSFpSZThxa3ZzU05wAR5Lr2FJIMG8T1MaM41gDWBh8DbfxGa9Shmb-4O8dGM1QjLH13URpU1Ggoyl-g_aem_WsQHPkj5Xhf3NxeURgNx-w" className="icon-link">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com/share/17C1AYEZm6/" className="icon-link">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.tiktok.com/@mekano_labs?is_from_webapp=1&sender_device=pc" className="icon-link">
          <RiTiktokLine className="icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCKruTW7voZiXpPmGzS9wnug" className="icon-link">
          <FaYoutube className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;