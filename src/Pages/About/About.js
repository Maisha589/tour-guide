import React from 'react';
import myImg from './IMG-20220108-WA0017 (1).jpg';

const About = () => {
    return (
        <div style={{
            backgroundImage: `url("https://i.ibb.co/NTTdcjm/bg.jpg")`
        }}>
            <h2 className='text-center pt-5 fs-2 fw-bold text-warning'>About me</h2>
            <h2 className='text-center pt-5 fs-2 fw-bold text-dark m-5'>I am <span className='text-warning'>Maisha Rahman</span></h2>
            <div className='d-flex '>
                <img className='h-50 w-50 ' src={myImg} alt="" />
                <div className='m-5 p-5'>
                    <h2><span className='text-center fs-2 fw-bold m-3 text-warning'>Goals</span></h2>
                    <p>I will be a full stack web developer</p>
                    <p>I will learn at least 1 languages apart from Bangala and English</p>
                    <p>I will read at least 30 books in 2022.</p>
                    <h2><span className='text-center fs-2 m-3 fw-bold text-warning'>For Achieving my goals</span></h2>
                    <p>I am giving my priority, time and my mind in IT field.</p>
                    <p>Hard work is the core of success.</p>
                    <p>Make everyday productive by practicing and learning new things.</p>
                    <p>Reading everyday and update my knowledge.</p>
                </div>
            </div>

        </div >
    );
};

export default About;