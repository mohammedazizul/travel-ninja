import {combineReducers} from 'redux';
import bookingReducer from './booking';
import favouriteReducer from './favourite';

const allReducers=combineReducers({
    myBooking:bookingReducer,
    myFavourite:favouriteReducer
});

export default allReducers;