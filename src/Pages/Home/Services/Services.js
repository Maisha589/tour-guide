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
        <div id='services' style={{
            backgroundImage: `url("https://i.ibb.co/NTTdcjm/bg.jpg")`
        }}>
            <h2 className='text-center pt-5 fs-2 fw-bold text-warning'>My Services</h2>
            <div className='row col-lg-4 col-md-6 col-sm-12 m-auto g-5'>
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