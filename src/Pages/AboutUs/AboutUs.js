import React from 'react';
import { Col, FormControl, InputGroup, Button, Row } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="our-details">
            <div className="container">
                <h2 className="pt-5 mb-3 text-center text-white">WELCOME TO LIVEWIRE LEARNING SOLUTIONS</h2>
                <Row xs={1} md={3} className="g-4">
                    <Col className="col-md-6 details">
                        <h3>About Us</h3>
                        <p>There are countless online education marketplaces on the internet. And there’s us. We are not the biggest. We are not the cheapest. But we are the fastest growing. We have the highest course completion rate in the industry.</p>
                        <p>And the reason is, we don’t give up. When a student commits to a course, we commit to the student. We are not going to sugar coat it - we will make you complete, come what may. You may not have given much thought to what you are signing up for, but we believe you are signing up for knowledge that is useful and complete. We are ridiculously committed to our students. Be it constant reminders, relentless masters or 24 x 7 online support - we will absolutely make sure that you run out of excuses to not complete the course.</p>
                        <h3>Sign up for our monthly newsletter</h3>
                        <p>Be the first to know about news and updates.We never share you mail with others. Trust us!</p>
                    </Col>
                    <Col className="col-md-6 details">
                        <h3>Our Vision</h3>
                        <p>To become the largest online learning ecosystem for continuing education, in partnership with corporates and academia.</p>
                        <h3>Our Mission</h3>
                        <p>To create an alternate platform for students who wish to continue and complete courses by attending live online courses, using a team of ridiculously committed educators who will stop at nothing to impart education, helped by a 24 x 7 support system. By deploying our world class team of industry experts, we aim to educate our learners with the skills they need to advance their professional life to the next level.</p>
                        <h5 className="mt-5">Leave your mail below</h5>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter email"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                SIGN UP
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutUs;