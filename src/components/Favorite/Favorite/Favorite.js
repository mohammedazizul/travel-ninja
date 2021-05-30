import React from 'react';
import './Favourite.css'
import { useSelector, useDispatch } from "react-redux";
import FavouriteCard from '../FavouriteCard/FavouriteCard';
import {removeFavourite} from '../../../actions';
import data from '../../../fakedata/PACKAGE_MOCK_DATA.json';

const Favorite = () => {
    const dispatch = useDispatch();
    const showFavourite = useSelector(state => state.myFavourite);
    const handleFavRemove=(id)=>{
        console.log('The is is', id);
        const theId={
            id:id
        }
        dispatch(removeFavourite(theId));
    }
    console.log(showFavourite)
    let i=1;
    return (
        <section className="container-fluid favourite-area d-flex align-items-center">
            <div className="col-lg-5 col-md-5 col-sm-8 col-xs-12 mx-auto favourite-small-area ">
                <h1 className="text-left mb-3"><span className="rounded-3 p-2 ">My Favourite ({showFavourite.length})</span></h1>
                <div className="booking-card-holder">
                    {
                        showFavourite.map(favData=> <FavouriteCard handleFavRemove={handleFavRemove} favData={favData} key={favData.id}></FavouriteCard>)
                    }
                   
                </div>
            </div>
        </section>
    );
};

export default Favorite;