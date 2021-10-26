import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container my-5'>
            <div className='row'>
                <div className="col-md-5">
                    <hr className='horizontal-line' />
                </div>
                <div className="col-md-2 service-title"><h1>Our <span>Services</span></h1></div>
                <div className="col-md-5"><hr className='horizontal-line' /></div>
            </div>
            <div className='service-cart'>
                <div className='row'>
                    {
                        services.map(service => <div
                            key={service.id} className='col-lg-4 col-md-6'>
                            <div className='cart border border m-2 mt-5'>
                                <div className="cart-img">
                                    <img className='w-100' src={service.img} alt="" />
                                </div>
                                <h2 className='m-2 pt-2'>{service.name}</h2>
                                <p className='p-2'>{service.description}</p>
                                <div className='text-center'>
                                    <Link to={`/service/${service.id}`}>
                                        <button className='btn-regular mb-3'>Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;