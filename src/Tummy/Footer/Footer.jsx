import React, { useState } from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaPinterestP } from 'react-icons/fa';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Prgent from '../../Images/Pregent.png';

const Footer = () => {

  const [isUp, setIsUp] = useState(true);







  const openWhatsApp = () => {
    const phoneNumber = "6303063268";
    const message = "Thank you for contacting";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleClick = () => {
    if (isUp) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
    setIsUp(!isUp);
  };











  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h2 className="footer-logo">   <img className='pre' src={Prgent} alt="" />
             <span>TummyTales</span></h2>
          <p>
          Pregnancy in the U.S. shouldn’t mean cultural confusion!
Let’s break it down.
          </p>
        </div>

        <div className="footer-box">
          <h3>Office</h3>
          <p>ITPL Road<br />Whitefield, Bangalore<br />Karnataka, PIN 560066, India</p>
          <a href="mailto:avinashtdm@outlook.com">surya@gmail.com</a>
          <p><strong>+91 6303063268</strong></p>
        </div>

        <div className="footer-box">
  <h3>Links</h3>
  <ul className="footer-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/pregnancy-map">Pregnancy Map</Link></li>
  <li><Link to="/mom-network">Mom-to-Mom Network</Link></li>
  <li><Link to="/ask-amma">Ask Amma</Link></li>
  <li><Link to="/resources">Resources</Link></li>
</ul>
</div>


        <div className="footer-box">
          <h3>Newsletter</h3>
          <div className="newsletter">
            <MdEmail className="email-icon" />
            <input type="email" placeholder="Enter your email id" />
            <button>→</button>
          </div>
          <div className="social-icons">
            <FaFacebookF className='icon' />
            <FaTwitter className='icon'/>
            <FaWhatsapp  className='icon'/>
            <FaPinterestP  className='icon'/>
          </div>
        </div>
      </div>

      <hr />
      <p className="copyright">design By Suresh Ampavilli  © 2025 - All Rights Reserved</p>

      <div className='Wtsap_icon' onClick={openWhatsApp}><FaSquareWhatsapp  className='icon'/></div>
    <div className='Arrow_icon' onClick={handleClick}>
      {isUp ? <FaArrowUp className='icon' /> : <FaArrowDown className='icon' />}
    </div>
    </footer>
  );
};

export default Footer;
