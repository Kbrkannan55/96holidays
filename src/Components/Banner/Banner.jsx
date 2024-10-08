import React from 'react';
import Slider from 'react-slick';
import './Banner.css';
import BannerImage1 from '../../Images/Banner-Image-1.jpg';
import BannerImage2 from '../../Images/Banner-Image-2.jpg';
import BannerImage3 from '../../Images/Banner-Image-3.jpg';

const Banner = () => {
    const settings = {
        dots: true,              // Show pagination dots
        infinite: true,          // Infinite scrolling
        speed: 2000,              // Transition speed
        slidesToShow: 1,         // Number of slides to show
        slidesToScroll: 1,       // Number of slides to scroll
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 5000,     // Autoplay speed
        arrows: false,           // Disable navigation arrows
        cssEase: "linear",       // Linear transition for a unique feel
    };

    return (
        <div className="banner">
            <Slider {...settings}>
                <div className="slider-item">
                    <img src={BannerImage2} alt="Beach Holiday" />
                    <div className="slider-text">
                        <h1>Explore Beautiful Beaches</h1>
                        <p>Discover the best beach destinations for your next holiday.</p>
                    </div>
                </div>
                <div className="slider-item">
                    <img src={BannerImage1} alt="Mountain Adventure" />
                    <div className="slider-text">
                        <h1>Mountain Adventures</h1>
                        <p>Experience thrilling mountain adventures around the world.</p>
                    </div>
                </div>
                <div className="slider-item">
                    <img src={BannerImage3} alt="City Escapes" />
                    <div className="slider-text">
                        <h1>City Escapes</h1>
                        <p>Get lost in the world's most vibrant cities.</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
