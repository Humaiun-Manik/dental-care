import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-fount text-center'>
            <Link to='/home'><button className='btn-regular back-btn mb-3'>Go Back</button></Link>
        </div>
    );
};
export default NotFound;