import React from 'react';
import Album from '../Album/Album';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Album></Album>
        </div>
    );
};

export default Home;