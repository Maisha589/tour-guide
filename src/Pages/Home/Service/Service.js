import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate();

    const handleServiceDEtail = id => {
        navigate(`/service/${id}`)
    }
    return (
        // Service Card data
        <div className="card p-3 mx-2" style={{ width: "20rem" }}>
            <img src={img} className="card-img-top w-100" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Tour to <span className='text-warning fw-bold'>{name}</span></h5>
                <p className="card-text">{description}.</p>
                <p className="card-text fw-bold">{price}.</p>
                <Link to='/service' onClick={() => handleServiceDEtail(id)} className='btn btn-warning fw-bold'>Process Booking</Link>
            </div>
        </div >
    );
};

export default Service;