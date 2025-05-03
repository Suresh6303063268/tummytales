import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Prgent from '../../Images/Pregent.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const profileRef = useRef(null);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <img className='pre' src={Prgent} alt="" />
        <h3 className="logo">Tummy Tales</h3>
        <ul className={isMobile ? 'nav-links-mobile active' : 'nav-links'}>
          <li><Link to="/" onClick={() => setIsMobile(false)}>Home</Link></li>

          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <Link to="#" className="dropbtn" onClick={(e) => e.preventDefault()}>
              Pregnancy Map
            </Link>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/Pregnancy tests">Your Essential Tests</Link>
                <Link to="/what-your-mom">What 's In Your Mom</Link>
                <Link to="/">Set For The Baby</Link>
              </div>
            )}
          </li>

          <li><Link to="/mom" onClick={() => setIsMobile(false)}>Mom-to-Mom Network</Link></li>
          <li><Link to="/Ask-amma" onClick={() => setIsMobile(false)}>Ask Amma</Link></li>
          <li><Link to="/" onClick={() => setIsMobile(false)}>Resources</Link></li>

          <li className="profile-dropdown" ref={profileRef}>
            <button className="profile-icon" onClick={toggleProfileDropdown}>
              <AccountCircleIcon className='icon' />
            </button>
            {isProfileDropdownOpen && (
              <div className="profile-dropdown-content">
                <Link to="/profile" onClick={() => setIsProfileDropdownOpen(false)}>View Profile</Link>
                <Link to="/logout" onClick={() => setIsProfileDropdownOpen(false)}>Logout</Link>
              </div>
            )}
          </li>
        </ul>

        <button className="mobile-menu-icon" onClick={toggleMenu}>
          {isMobile ? <>&#10005;</> : <>&#9776;</>}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
