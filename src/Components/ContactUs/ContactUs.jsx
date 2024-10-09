import React from 'react';
import './ContactUs.css'; // Import your CSS file
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import ContactImage1 from '../../Images/contact-bg.jpg';
import ContactImage2 from '../../Images/contact-png.png';
import PlanYourTrip from '../PlanYourTrip/PlanYourTrip';

const ContactUs = () => {
    return (
        <>
            <section className="contact-section">
                <Box className="contact-bg" sx={{ padding: '40px', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
                    <Typography variant="h3" gutterBottom>Get in Touch with Us</Typography>
                    <Typography variant="h2" gutterBottom>Contact Us</Typography>
                    <div className="line">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Typography variant="body1" className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.
                    </Typography>
                </Box>
            </section>
            <div className='contact-body'>

                <div className="contact-info">
                    <div>
                        <span className="fas fa-phone"></span>
                        <span>Phone No.</span>
                        <span>1-2392-23928-2</span>
                    </div>
                    <div>
                        <span className="fas fa-envelope"></span>
                        <span>E-mail</span>
                        <span>mail@company.com</span>
                    </div>
                    <div>
                        <span className="fas fa-map-marker-alt"></span>
                        <span>Address</span>
                        <span>2939 Patrick Street, Victoria, TX, United States</span>
                    </div>
                    <div>
                        <span className="fas fa-clock"></span>
                        <span>Opening Hours</span>
                        <span>Monday - Friday (9:00 AM to 5:00 PM)</span>
                    </div>
                </div>
            </div>

            <PlanYourTrip />

            {/* Map Section */}
            <Box className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241964.06641806355!2d76.9529948!3d11.259817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ef28d828c3d9%3A0xf9767cdc2d10caba!2s96%20Holidays%20Official!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: '0' }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </Box>


        </>
    );
};

export default ContactUs;
