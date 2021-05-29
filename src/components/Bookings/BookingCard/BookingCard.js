import React from 'react';
import './BookingCard.css'
import map from '../../../images/map.svg';
import user from '../../../images/man.svg';
import seat from '../../../images/seat.svg';
import cancel from '../../../images/prohibition.svg';
import calendar from '../../../images/calendar.svg';

const BookingCard = (props) => {
    const { id, name, from, to, depDate, arrriDate, fastClassPrice, fastClassQnty, fastClassPType, economyClassPrice, economyQnty, economyClassPType } = props.bookingInfo;

    return (
        <div className="booking-card row d-flex align-items-center shadow-none p-3 mb-3 bg-light rounded">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 content-area text-secondary">
                <h3><img src={map} alt="Map Marker icon" /> From {from} to {to}</h3>
                <h6><img src={calendar} alt="calendar icon" />  Departure:{depDate} Arrival: {arrriDate} </h6>
                <p><img src={user} alt="User icon" />  Booking For: {name}</p>
                <p><img src={seat} alt="Seat icon" />
                    {
                        fastClassQnty > 0 ? <span>First-Class ({fastClassPType}-{fastClassQnty}) BDT {fastClassPrice * fastClassQnty} </span> : ''
                    }
                    {
                        economyQnty > 0 ? <span>Economy-Class ({economyClassPType}-{economyQnty}) BDT {economyClassPrice * economyQnty}</span> : ''
                    }
                </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex justify-content-end cencel-button-box">
                <button type="button" onClick={()=>alert(id)}class="btn btn-outline-danger"><img src={cancel} alt="Cancel icon" /> Cancel Booking</button>
            </div>
        </div>
    );
};

export default BookingCard;