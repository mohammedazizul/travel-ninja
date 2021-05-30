import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './Bookings.css';
import checkmark from '../../../images/checkmark.svg';

//Code For Redux
import { useSelector, useDispatch } from "react-redux";
import {removeBooking} from '../../../actions';


const Bookings = () => {
    const dispatch = useDispatch();
    const showBookings = useSelector(state => state.myBooking);
    const handleBookingRemove=(id)=>{
        const theId={
            id:id
        }
        dispatch(removeBooking(theId));
    }




    return (
        <section className="container-fluid bookings-area d-flex align-items-center">
            <div className="col-lg-5 col-md-5 col-sm-8 col-xs-12 mx-auto bookings-small-area ">
                <h1 className="text-left mb-3"><span className="rounded-3 p-2 "><img src={checkmark} alt="Check Mark icon"/> {showBookings.length!==0?<>Your All Bookings {showBookings.length}</>:<>No Booking Information Found</> }</span></h1>
                <div className="booking-card-holder">
                    {
                        showBookings.map(bdata => <BookingCard key={bdata.id} handleBookingRemove={handleBookingRemove} bookingInfo={bdata}></BookingCard>)
                    }
                </div>
            </div>



        </section>
    );
};

export default Bookings;