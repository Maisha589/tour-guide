import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Hx0SJ8M/tourist-guide-banner-1-1-1-1-1-1-1-1-1-1-1-2-1.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/C6HH1Tk/female-tourists-hand-have-happy-travel-map-3.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2 className='fw-bold text-dark'>Fun with Saira</h2>
                    <p className='fw-bold'>I have visited 20 countries in this world, still counting. I would love to be a guide for you to explore some country in Asia. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/47T5Xz2/tourist-guide-banner-2-1.jpg"
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