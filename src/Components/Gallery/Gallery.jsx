import React, { useEffect, useState } from 'react';
import './Gallery.css';
import img1 from '../../Images/Banner-Image-1.jpg';
import img2 from '../../Images/Banner-Image-2.jpg';
import img3 from '../../Images/Banner-Image-3.jpg';
import img4 from '../../Images/Grid3.jpg';
import img5 from '../../Images/Grid2.jpg';
import img6 from '../../Images/Grid5.jpg';
import img7 from '../../Images/Banner-Image-3.jpg';
import img8 from '../../Images/Banner-Image-2.jpg';
import img9 from '../../Images/Grid4.jpg';

const images = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2, alt: 'Image 2' },
    { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' },
    { id: 6, src: img6, alt: 'Image 6' },
    { id: 7, src: img7, alt: 'Image 7' },
    { id: 8, src: img8, alt: 'Image 8' },
    { id: 9, src: img9, alt: 'Image 9' },
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className='top-gallery' style={{display:'flex', justifyContent:'center'}}>
            <h5 className="packages-header" style={{display:'flex', justifyContent:'center'}} >
                <div className='happy-gallery'>
                <span>H</span>
                <span>A</span>
                <span>P</span>
                <span>P</span>
                <span>Y</span>&nbsp;</div>
                <div className='gallery-divider' >
                <span>C</span>
                <span>L</span>
                <span>I</span>
                <span>E</span>
                <span>N</span>
                <span>T</span>
                <span>S</span>
                </div>
            </h5>
</div>
            <div className="gallery-slider">
                <div className="gallery-wrapper" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                    {images.map((image) => (
                        <div key={image.id} className="gallery-item">
                            <img src={image.src} alt={image.alt} className="gallery-image" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
