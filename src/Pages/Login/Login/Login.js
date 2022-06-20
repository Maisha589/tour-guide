import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    // showing spinner
    if (loading) {
        return <Loading></Loading>
    }
    // showing error
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("sent");
        }
        else {
            toast("Please Enter Your Email");
        }
    }

    const goToRegister = event => {
        navigate('/register');
    }

    return (
        <div style={{
            backgroundImage: `url("https://i.ibb.co/NTTdcjm/bg.jpg")`
        }}>
            <h2 className='text-center pt-5 mb-5 text-warning'>Login to Book my service</h2>
            <Form onSubmit={handleSubmit} className='m-auto w-50 border border-warning p-5 border-3'>
                <Form.Group className="mb-3" controlId='fromBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorElement}
                <Button className='fw-bold' variant="warning" type="submit">
                    Login
                </Button>
                <p className='mt-5'>New to my FunGuide? <Link to='/register' onClick={goToRegister} className='text-primary pe-auto text-decoration-none'>Please Register</Link></p>
                <p className='mt-5'>Forget password? <button onClick={resetPassword} className='btn btn-link text-primary pe-auto text-decoration-none'>Reset password</button></p>
                <SocialLogin></SocialLogin>
            </Form>
            
            <h3 className='text-center p-5 m-0 text-warning'> Your fun guide is here !!</h3>
        </div >
    );
};

export default Login;