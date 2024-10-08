import React from 'react';
import './Awards.css'; // Make sure the CSS file is created
import CupImage from '../../Images/Awards6.jpg'; // Ensure this image path is correct
import Award from '../../Images/Cup2.jpg';

const Awards = () => {
    return (
        <div className='whole-flex' style={{ display: 'flex'}}>
            <div className='award-img-flex'>
                <img src={Award} alt="Award Cup 2" style={{height:'400px'}} />
            </div>
            <div className="awards-container">
                <img src={CupImage} alt="Award Cup" className="award-cup" />
                <div className="awards-content">
                    <h4 className="awards-title">96 Holidays has been awarded the Best Travel Company in South India</h4>
                    <p className="awards-description">
                        96 Holidays has been awarded the Best Travel Company in South India Award in
                        <strong> The Travel and Hospitality Awards</strong> by the Government of India.
                    </p>
                    <p className="awards-description">
                        At this point, we humbly bow to all our dearest clients, suppliers, brand ambassadors,
                        media partners, friends, family, and well-wishers for your unconditional love towards us.
                        We promise to work even harder and deliver even better.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Awards;
