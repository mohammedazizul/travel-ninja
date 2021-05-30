import React from 'react';
import { Button } from 'react-bootstrap';

const PackageCard = (props) => {

    // console.log(props.data);

    const {id, countryName, image, description} = props.data;
    return (
        <div className="col">
            <div className="card">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Package : {id} in {countryName}</h5>
                    <p className="card-text">{description}</p>
                    <Button 
                    onClick={() => {
                        props.handlePackageClicked(id)
                        }}
                    >Add To Favourite</Button>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;