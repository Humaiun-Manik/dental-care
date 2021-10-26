import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-1st">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-6 text-white">
                            <h5>Get in touch</h5>
                            <h3>Contact us now</h3>
                            <hr className='horizontal' />
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>EMERGENCY CONTACT</h6>
                                    <p><i className="fas fa-phone-square call"></i>Free call 24/7
                                        +8801756498400</p>
                                </div>
                                <div className="col-md-6">
                                    <h6>HOME VISIT</h6>
                                    <p><i className="fas fa-phone-square-alt call"></i>Chargeable call 24/7
                                        +8801945255445</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="https://i.ibb.co/D1k8xgQ/dentalcare-promo-new.png" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-12 text-white follow-us">
                                    <h6 className='pl-5'>Follow us</h6>
                                    <h3 className='pl-5'>Our Activity</h3>
                                    <hr className='horizontal' />
                                    <p>Organically grow the holistic world view of innovation empowerment</p>
                                    <div className='social-icon text-white d-flex'>
                                        <i className="fab fa-facebook-f m-2"></i>
                                        <i className="fab fa-twitter m-2"></i>
                                        <i className="fab fa-instagram m-2"></i>
                                        <i className="fab fa-linkedin-in m-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#004365" }} className='py-2 text-white'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pt-3">
                            <small>Copyright by Dental clinic 2021. All rights reserved</small>
                        </div>
                        <div className="col-md-4 footer-logo text-center">
                            <p><img className='m-2' src="https://i.ibb.co/NrZ4Bcs/logo.jpg" alt="" />DNTAL CLINIC</p>
                        </div>
                        <div className="col-md-4 text-center pt-3">
                            <Link to='/contact'><button className='contact-btn'>Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;