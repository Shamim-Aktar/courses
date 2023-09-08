import React from 'react';
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='jumbotron bg-light p-5'>
            <h1>Pluralsight Administration</h1>
            <p>webapp</p>
            <Link to="about" className='btn btn-primary btn-lg'>
                Learn More
            </Link>
            
        </div>
    );
};

export default HomePage;