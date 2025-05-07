import React from 'react';
import './Contact.css'; 
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We’re here to support you throughout your pregnancy journey.</p>

      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p><MdLocationOn  className='contact-icon'/> 123 Maternity Lane, City, Country</p>
          <p><MdEmail  className='contact-icon'/> support@pregnancycare.com</p>
          <p><MdPhone  className='contact-icon' /> +123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
