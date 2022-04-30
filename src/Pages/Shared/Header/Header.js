import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import logo from "./logo.png";
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar className='p-0' sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="80"
                        height="80"
                        className="d-inline-block align-center"
                    />{' '}
                    <h2 className='d-inline-block fw-bold text-warning'>Fun Guide</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='fw-bolder' href="home#services">Services</Nav.Link>
                        <Nav.Link className='fw-bolder' href="home#album">Album</Nav.Link>
                        <Nav.Link className='fw-bolder' as={Link} to="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='fw-bolder' as={Link} to="/about">About</Nav.Link>
                        {user ?
                            <button className='btn btn-link text-decoration-none text-danger fw-bolder' onClick={handleSignOut}>Sign Out</button>
                            :
                            <Nav.Link className='text-warning fw-bolder' as={Link} to="/login">
                                Login
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;