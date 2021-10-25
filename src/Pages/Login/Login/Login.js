import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, toggleLogin, isLogin, error } = useAuth();

    return (
        <div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <Form onSubmit={handleRegistration}>
                        <h4>Please {isLogin ? 'Login' : 'Register'}</h4>
                        {
                            !isLogin && <Row>
                                <Col>
                                    <Form.Label>First name <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Label>Last name <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control placeholder="Last name" />
                                </Col>
                            </Row>
                        }
                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                            <Form.Label>Email address <span className='text-danger'>*</span></Form.Label>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password <span className='text-danger'>*</span></Form.Label>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                        </Form.Group>
                        <p className='text-danger'>{error}</p>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registered?" />
                        </Form.Group>
                        <Button variant="primary" type="submit">{isLogin ? 'Login' : 'Register'}</Button>
                    </Form>
                </div>
                <div className="col-md-3"></div>
            </div>
            {/* <h2>please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button> */}
        </div>
    );
};

export default Login;