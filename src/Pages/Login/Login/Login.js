import React from 'react';
import './Login.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, toggleLogin, signInUsingGoogle, isLogin, error, setUser, setIsLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || '/home';

    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 p-3 login-form">
                <Form onSubmit={handleRegistration}>
                    <h3 style={{ color: '#008298', paddingTop: '10px' }}>Please {isLogin ? 'Login' : 'Register'}</h3>
                    {
                        !isLogin && <Row>
                            <Col>
                                <Form.Label>First name <span className='text-danger'>*</span></Form.Label>
                                <Form.Control onBlur={handleNameChange} placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Label>Last name <span className='text-danger'>*</span></Form.Label>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                    }
                    <Form.Group className="my-2" controlId="formBasicEmail">
                        <Form.Label>Email address <span className='text-danger'>*</span></Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password <span className='text-danger'>*</span></Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                        <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registered?" />
                    </Form.Group>
                    <Button style={{ backgroundColor: '#008298' }} variant="primary" type="Submit">{isLogin ? 'Login' : 'Register'}</Button>
                    <div className='text-center'>
                        <button onClick={() => {
                            signInUsingGoogle()
                                .then(result => {
                                    setUser(result.user);
                                    history.push(redirect);
                                })
                                .finally(() => setIsLoading(false));
                        }} className="google-btn"><img src="https://i.ibb.co/1m4xzCj/google.jpg" alt="" /> Login With Google</button>
                    </div>
                </Form>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
};

export default Login;