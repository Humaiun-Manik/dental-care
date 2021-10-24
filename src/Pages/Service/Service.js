import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data.find(service => service.id === parseInt(serviceId))))
    }, []);

    return (
        <div>
            <div className='site'>
                <div className='site-title text-canter'>
                    <h3><Link to='/home'>Home</Link> <span style={{ color: 'red' }}>|</span> <span className='service-name text-center'>{service.name}</span></h3>
                </div>
                <div className='overlay'></div>
            </div>
            <div className="row my-5 container">
                <div className="col-md-7">
                    <img className='w-100' src={service.img} alt="" />
                </div>
                <div className='col-md-1'></div>
                <div className="col-md-4">
                    <h2 className='service-title'>{service.name}</h2>
                    <p>{service.description}</p>
                    <hr />
                    <p>Aroma Dental is here to serve all your dental needs, from simple dental cleaning to placing dental implants or covering all your orthodontics treatments. We server all Adults and children under one roof. Book your next appointment today to learn more about how to have the healthiest and most beautiful smile.</p>
                    <button className='btn-regular mt-3'>Booking Online Now</button>
                </div>
            </div>
            <div className='row container my-5'>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h1 className='text-center pt-4'>INSURANCE ACCEPTED</h1>
                    <hr className='horizontal-line' />
                </div>
                <div className="col-md-3"></div>
                <p className='text-center'>We will be glad to file a predetermination for you to verify coverage of any necessary dental treatment. We accept most PPO insurances. Don't be discouraged if you don't have dental insurance. We have a dental membership plan that is an excellent alternative to dental insurance. Our membership plan has affordable annual fee that offers a discount on all your preventative care program.</p>
            </div>
        </div>
    );
};

export default Service;