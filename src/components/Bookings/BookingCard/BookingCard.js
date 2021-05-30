import React from 'react';
import './BookingCard.css'
import map from '../../../images/map.svg';
import seat from '../../../images/seat.svg';
import cancel from '../../../images/prohibition.svg';
import calendar from '../../../images/calendar.svg';

const BookingCard = (props) => {
    const { id, flyingFrom, flyingto, departure, arrival, firstClass,  economy, subTotal, total} = props.bookingInfo;

    return (
        <div className="booking-card row d-flex align-items-center shadow-none p-3 mb-3 bg-light rounded">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 content-area text-secondary">
                <h3><img src={map} alt="Map Marker icon" /> From {flyingFrom} to {flyingto}</h3>
                <h6><img src={calendar} alt="calendar icon" />  Departure:{departure} Arrival: {arrival} </h6>
                <p><img src={seat} alt="Seat icon" />
                    {
                        firstClass > 0 ? <span>First-Class ({firstClass})</span> : ''
                    }
                    {
                        economy > 0 ? <span>Economy-Class ({economy})</span> : ''
                    }
            
                </p>
                <p>
                    <strong>Billing: Sub-Total ${subTotal} Total ${total} 10% VAT Added</strong>
                </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex justify-content-end cencel-button-box">
                <button type="button" onClick={()=>props.handleBookingRemove(id)} className="btn btn-outline-danger"><img src={cancel} alt="Cancel icon" /> Cancel Booking</button>
            </div>
        </div>
    );
};

export default BookingCard;