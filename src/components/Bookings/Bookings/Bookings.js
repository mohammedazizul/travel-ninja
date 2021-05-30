import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './Bookings.css';
import checkmark from '../../../images/checkmark.svg';


const Bookings = () => {
    const allBookings = [
        {
            id:1,
            name:'Md. Rajibul Hasan',
            from: 'Dhaka',
            to: 'Bangladesh',
            depDate: '01-06-2021',
            arrriDate:'03-06-2021',
            fastClassPrice: 300,
            fastClassQnty:2,
            fastClassPType:'Adult',
            economyClassPrice:250,
            economyQnty:1,
            economyClassPType:'Child'
        },
        {
            id:2,
            name:'Md. Azizul',
            from: 'Malaysia',
            to: 'Bangladesh',
            depDate: '01-06-2021',
            arrriDate:'03-07-2021',
            fastClassPrice: 300,
            fastClassQnty:1,
            fastClassPType:'Adult',
            economyClassPrice:250,
            economyQnty:0,
            economyClassPType:''
        },
        {
            id:3,
            name:'Mr. Badhan',
            from: 'Chittagong',
            to: 'Barisal',
            depDate: '05-06-2021',
            arrriDate:'06-07-2021',
            fastClassPrice: 300,
            fastClassQnty:1,
            fastClassPType:'Adult',
            economyClassPrice:250,
            economyQnty:1,
            economyClassPType:'Adult'
        }
    ]
    return (
        <section className="container-fluid bookings-area d-flex align-items-center">
            <div className="col-lg-5 col-md-5 col-sm-8 col-xs-12 mx-auto bookings-small-area ">
                <h1 className="text-left mb-3"><span className="rounded-3 p-2 "><img src={checkmark} alt="Check Mark icon"/> Your All Bookings</span></h1>
                <div className="booking-card-holder">
                    {
                        allBookings.map(bdata => <BookingCard bookingInfo={bdata}></BookingCard>)
                    }
                </div>
            </div>



        </section>
    );
};

export default Bookings;