import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <div className='doctors-site'>
                <div className='site-title text-canter'>
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className='text-white mb-4'>Our Professional Team</h1>
                            <p className='text-white'>A good smile reflects your personality, your confidence, your beauty. As long as you have good teeth behind that smile, then you are ready to go forward, to start a new mission, to take a challenge with enough confidence. If you have a good smile, then it is obvious that you are already ahead of the curve.</p>
                            <button className='mt-5 btn-booking'>
                                Book Appointment
                            </button>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
                <div className='overlay'></div>
            </div>
            <div className="container mx-5">
                <p className='mt-5 mb-0 text-success'>Professionals</p>
                <h3>Our Doctors</h3>
                <div className="row mb-5">
                    {
                        doctors.map(doctor => <div
                            key={doctor.id} className='col-md-4'>
                            <div className='cart border border m-2 mt-5'>
                                <div className="cart-img">
                                    <img className='w-100' src={doctor.img} alt="" />
                                </div>
                                <h3 className='m-2 pt-2'>{doctor.name}</h3>
                                <hr />
                                <p><i style={{ padding: '0px 10px', color: '#C74001' }} class="fas fa-envelope"></i>{doctor.email}</p>
                                <p><i style={{ padding: '0px 10px', color: '#C74001' }} class="fas fa-phone"></i>{doctor.phone}</p>
                                <p className='p-2'>{doctor.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;