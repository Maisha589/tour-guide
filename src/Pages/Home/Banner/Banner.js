import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Nnhgsyx/girl-holds-tourist-map-old-town.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2 className='fw-bold text-dark'>Welcome to Fun guide.</h2>
                    <p className='fw-bold'>I am Lara an a tourist guide. Looking for a tour guide? You are in the right place. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/jMcmNX5/front-view-attractive-female-holding-globe-preparing-trip-blue-space.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2 className='fw-bold text-dark'>Fun with Lara</h2>
                    <p className='fw-bold'>I have visited 20 countries in this world, still counting. I would love to be a guide for you to explore some country in Asia. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/MkXhTgs/people-adventure-trekking-concept-happy-female-tourist-holds-paper-map-strolls-valley-near-mountains.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2 className='fw-bold text-dark'>A guide and a partner!!</h2>
                    <p className='fw-bold'>Traveling alone? No worry! I will be your exploring partner and your guide. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;