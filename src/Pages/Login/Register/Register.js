import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const goToLogin = event => {
        navigate("/login");
    }
    if (user) {
        navigate('/');
    }

    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div style={{
            backgroundImage: `url("https://i.ibb.co/NTTdcjm/bg.jpg")`
        }}>
            <h2 className='text-center p-5 mb-5'>Register to Book my service</h2>
            <Form onSubmit={handleRegister} className='m-auto w-50 border border-warning p-5 border-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Register
                </Button>
                <p className='mt-5'>Already have an account? <Link to='/login' onClick={goToLogin} className='text-primary pe-auto text-decoration-none'>Go to Login</Link></p>
            </Form>
        </div >
    );
};

export default Register;