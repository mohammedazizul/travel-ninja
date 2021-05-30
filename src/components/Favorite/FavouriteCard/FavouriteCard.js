import React from 'react';
import './FavouriteCard.css';
import heart from '../../../images/heart.svg';
import cancel from '../../../images/prohibition.svg';


const FavouriteCard = (props) => {
    const {id,countryName,description}=props.favData;
    return (
        
        <div className="favourite-card row d-flex align-items-center shadow-none p-3 mb-3 bg-light rounded">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 content-area text-secondary">
                <h3><img src={heart} alt="Map Marker icon" /> Travel IN {countryName}</h3>
                <p>{description}</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex justify-content-end cencel-button-box">
                <button type="button" onClick={()=>props.handleFavRemove(id)} class="btn btn-outline-danger"><img src={cancel} alt="Cancel icon" /> Remove</button>
            </div>
        </div>

    );
};

export default FavouriteCard;