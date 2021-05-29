import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import TicketBookingForm from '../TicketBookingForm/TicketBookingForm';
import './Home.css';

const Home = () => {
    return (
        <main className='light-bg'>
            <TicketBookingForm />
            <Footer />
        </main>
    );
};

export default Home;