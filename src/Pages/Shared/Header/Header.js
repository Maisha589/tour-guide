import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "./logo.png";

const Header = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="100"
                        height="100"
                        className="d-inline-block align-center"
                    />{' '}
                    <h2 className='d-inline-block fw-bold'>Fun Guide</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;