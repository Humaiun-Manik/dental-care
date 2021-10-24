import React from 'react';
import './Menubar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <Navbar style={{ backgroundColor: '#008298' }} variant="dark" sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='logo' href="#home"><img src="https://i.ibb.co/NrZ4Bcs/logo.jpg" alt="" /> DENTAL CLINIC</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="menu-items">
                        <Nav.Link as={Link} to="/home" className='menu'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/doctors" className='menu'>Our Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/treatmentCost" className='menu'>Treatment Cost</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className='menu'>Contact Us</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Ottdo</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;