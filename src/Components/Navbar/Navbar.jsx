// src/components/Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'; // Importing the phone icon

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">96 Holidays</div>

            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* The overlay background when menu is active */}
            <div className={`overlay ${isOpen ? 'show-overlay' : ''}`} onClick={toggleMenu}></div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#packages" onClick={toggleMenu}>Packages</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Honeymoon</a></li>
                <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>                
            </ul>
            <div className="phone-number">
                <FaPhone className="phone-icon" /> +91 82706 95575
            </div>

        </nav>
    );
};

export default Navbar;
