import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div className="card m-3" style={{ width: "20rem" }}>
            <img src={img} className="card-img-top w-100" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}.</p>
                <p className="card-text">{price}.</p>
                <Link to='/' className='btn btn-primary'>Process Booking</Link>
            </div>
        </div >
    );
};

export default Service;