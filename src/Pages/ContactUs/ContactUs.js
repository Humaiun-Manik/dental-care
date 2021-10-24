import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="container contact-form">
                <Row xs={1} md={3} className="g-4">
                    <Col className="col-md-3"></Col>
                    <Col className="col-md-6">
                        <h2 className="pt-5 pb-5 text-center text-white">CONTUCT FORM</h2>
                        <h4 className="text-white">Contact us</h4>
                        <p className="text-white icon">Fill in the form below to contact us: <i className="fas fa-paper-plane"></i></p>
                        <hr className="horizontal-line" />
                        <p className="text-white mt-4">Name:</p>
                        <Form.Control type="text" placeholder="Your name..." />
                        <p className="text-white mt-4">Email:</p>
                        <Form.Control type="text" placeholder="Your email address..." />
                        <p className="text-white mt-4">Subject:</p>
                        <Form.Control type="text" placeholder="Massage subject..." />
                        <p className="text-white mt-4">Message:</p>
                        <Form.Control
                            as="textarea"
                            placeholder="Massage text..."
                            style={{ height: '100px' }}
                        />
                        <button className="send-btn">sent message</button>
                    </Col>
                    <Col className="col-md-3"></Col>
                </Row>
            </div>
        </div>
    );
};

export default ContactUs;