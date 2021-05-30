import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Packages from '../Packages/Packages';
import TicketBookingForm from '../TicketBookingForm/TicketBookingForm';
import './Home.css';

const Home = () => {
    return (
        <main className='light-bg'>
            <TicketBookingForm />
            <Packages/>
            <Footer />
        </main>
    );
};

export default Home;