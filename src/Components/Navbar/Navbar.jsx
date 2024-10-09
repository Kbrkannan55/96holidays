import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
           <div className="logo"> <Link to="/" style={{color:'#FFD700', textDecoration:'none'}}><p>96 Holidays</p></Link></div>

            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className={`overlay ${isOpen ? 'show-overlay' : ''}`} onClick={toggleMenu}></div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/packagedetails" onClick={toggleMenu}>Packages</Link>
                </li>
                <li>
                    <Link to="#honeymoon" onClick={toggleMenu}>Honeymoon</Link>
                </li>
                <li>
                    <Link to="#about" onClick={toggleMenu}>About Us</Link>
                </li>
                <li>
                    <Link to="/contactus" onClick={toggleMenu}>Contact</Link>
                </li>
            </ul>

            <div className="phone-number">
                <FaPhone className="phone-icon" /> +91 82706 95575
            </div>
        </nav>
    );
};

export default Navbar;
