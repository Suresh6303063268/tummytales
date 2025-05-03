import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaPinterestP } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Prgent from '../../Images/Pregent.png';

const Footer = () => {
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
            <FaFacebookF />
            <FaTwitter />
            <FaWhatsapp />
            <FaPinterestP />
          </div>
        </div>
      </div>

      <hr />
      <p className="copyright">design By Suresh Ampavilli  © 2025 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
