import React from 'react';

const Blog = () => {
    return (
        <div className='p-5' style={{
            backgroundImage: `url("https://i.ibb.co/NTTdcjm/bg.jpg")`
        }} >
            <h3 className='text-center pt-3 fs-2 fw-bold text-warning'>Question answer blog</h3>
            <h3 className='text-warning p-3 m-3'>1. Different between Authentication and Authorization:</h3>
            <p ><span className='fw-bold'>Authentication</span>:Authentication verifies who the user is. It is changeable by user.It is the first step to process .</p>
            <p><span className='fw-bold'>Authorization</span>:Authorization check that the user can proceed or not. It cannot changeable. It comes after authentication.</p>
            <h3 className='text-warning p-3 m-3'>2. Why are you using firebase? What's other option?</h3>
            <p>I am using firebase for making my website local to global. Also using for the authentication of my website. Alternative of firebase - Parse, back4app, Kinvey etc.  </p>
            <h3 className='text-warning p-3 m-3'>3. What other services does firebase provide other then authentication?</h3>
            <p>Other then authentication we can use firebase for making our website local to global. It helps to develop apps. It can be use for store user data. It can be used for sending notification. </p>
        </div>
    );
};

export default Blog;