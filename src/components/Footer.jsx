import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';
import '../styles/components/Footer.css';
import { RiTiktokLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-section">
          <h3 className="footer-title">تواصل معنا</h3>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/mekano_labs/?fbclid=IwY2xjawM_fnlleHRuA2FlbQIxMQBicmlkETFQN0swSFpSZThxa3ZzU05wAR5Lr2FJIMG8T1MaM41gDWBh8DbfxGa9Shmb-4O8dGM1QjLH13URpU1Ggoyl-g_aem_WsQHPkj5Xhf3NxeURgNx-w" className="footer-icon-link">
              <FaInstagram className="footer-icon" />
            </a>
            <a href="https://www.facebook.com/share/17C1AYEZm6/" className="footer-icon-link">
              <FaFacebook className="footer-icon" />
            </a>
            <a href="https://www.tiktok.com/@mekano_labs?is_from_webapp=1&sender_device=pc" className="footer-icon-link">
              <RiTiktokLine className="footer-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCKruTW7voZiXpPmGzS9wnug" className="footer-icon-link">
              <FaYoutube className="footer-icon" />
            </a>
          </div>
        </div>
        
        <div className="email-section">
          <div className="email-container">
            <FaEnvelope className="email-icon" />
            <span className="email-text">mekanolabs@gmail.com</span>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p className="copyright-text">
          © {new Date().getFullYear()} Mechano Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;