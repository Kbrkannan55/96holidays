// src/components/PlanYourTrip.js

import React, { useState } from 'react';
import './PlanYourTrip.css'; // Ensure you create this CSS file
import FlexImage from '../../Images/GetInTouch.jpg';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify'; // Import toast functions
import 'react-toastify/dist/ReactToastify.css'; // Import default styles

const PlanYourTrip = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_4o1bean', 'template_o3or5uk', formData, 'KrusPxQCS76bO5Deg')
            .then((response) => {
                console.log('Email sent successfully!', response);
                toast.success('Email sent successfully!'); // Show success toast
                setFormData({ name: '', mobile: '', email: '', message: '' }); // Clear the form
            }, (error) => {
                console.error('Failed to send email:', error);
                toast.error('Failed to send email, please try again.'); // Show error toast
            });
    };

    return (
        <div className='whole-package'>
            <ToastContainer /> {/* Include the toast container */}
            <h2 className="packages-header" style={{ alignContent: 'center', marginTop: '15px' }}>
                <p style={{ textAlign: 'center' }}>
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>N</span>
                    <span>E</span>
                    <span>C</span>
                    <span>T</span>&nbsp;
                    <span>W</span>
                    <span>I</span>
                    <span>T</span>
                    <span>H</span> &nbsp;
                    <span>U</span>
                    <span>S</span>
                </p>
            </h2>
            <div className='img-flex' style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                <div className='img'>
                    <img src={FlexImage} alt="Get In Touch" className="flex-image" />
                </div>
                <div className="plan-your-trip-container">
                    <h3 className="heading">Plan Your Next Trip with the Leading Travel Agency</h3>
                    <br />
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="textarea-field"
                        ></textarea>
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlanYourTrip;
