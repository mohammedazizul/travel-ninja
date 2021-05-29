import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <div class="container">
                <Link class="navbar-brand" to='/'>Travel Ninja</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/home' className='nav-link active'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/bookings' className='nav-link'>Bookings</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/favorite' className='nav-link'>Favorite</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className='nav-link'>Log In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;

// {/* <li className="nav-item">
//                             <Link to='/home' className='nav-link active'>Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to='/bookings' className='nav-link'>Bookings</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to='/favorite' className='nav-link'>Favorite</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to='/about' className='nav-link'>About</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to='/login' className='nav-link'>Log In</Link>
//                         </li> */}
