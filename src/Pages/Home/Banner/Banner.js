import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center align-items-center'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 banner-title'>
                        <h1>YOUR BEAUTIFUL SMILE</h1>
                        <p>DentalCare is most focused in helping you discover your most beautiful smile as quickly as possible. Get your best looking smile now!</p>
                        <button className='btn-regular'>More About Us</button>
                    </div>
                    <div className='col-md-6'></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;