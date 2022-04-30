import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const goToLogin = event => {
        navigate("/login");
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        console.log('Updated profile');
        navigate('/');
    }

    return (
        <div style={{
            backgroundImage: `url("https://i.ibb.co/NTTdcjm/bg.jpg")`
        }}>
            <h2 className='text-center pt-5 mb-5 text-warning'>Register to Book my service</h2>
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
                <Button className='fw-bold' variant="warning" type="submit">
                    Register
                </Button>
                <p className='mt-5'>Already have an account? <Link to='/login' onClick={goToLogin} className='text-primary pe-auto text-decoration-none'>Go to Login</Link></p>
            </Form>
            <h3 className='text-center p-5 m-0 text-warning'> Register early !! You need to book first!! </h3>
        </div >
    );
};

export default Register;