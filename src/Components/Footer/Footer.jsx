import React, { useState } from 'react';
import './Footer.css'; // Ensure you create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Subscribed with: ${email}`);
        setEmail(''); // Clear the email field after subscription
    };

    return (
        <footer className="footer-container">
            <div className="footer-quote">
                <h3>"The journey of a thousand miles begins with one step."</h3>
            </div>
            <div className="footer-content">
                <div className="footer-address">
                    <h4>Office Address:</h4>
                    <p>123 Travel Lane,</p>
                    <p>City, State, Zip Code</p>
                </div>
                <div className="footer-center-content">
                    <h4>© 2024 96 Holidays</h4>
                    <p>All Rights Reserved. Registered with the Government of India.</p>
                </div>
                <div className="footer-subscribe">
                    <h4>Subscribe to Our Newsletter</h4>
                    <form onSubmit={handleSubscribe}>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Enter your email" 
                            required 
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <hr className="footer-line" /> {/* Line above social links */}
            <div className="footer-links">
                <div className="social-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
            <div className="developed-by">
                Developed by BV Tech
            </div>
        </footer>
    );
};

export default Footer;
