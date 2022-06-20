import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services'>
            <h2 className='container text-center pt-5 pb-5 fs-2 fw-bold text-warning'>My Services</h2>
            <div className='d-flex justify-content-start align-items-center flex-wrap'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;