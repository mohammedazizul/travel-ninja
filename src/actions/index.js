export const addToFavourite=(theData)=>{
    return {
        type:"ADD_TO_FAVOURITE",
        payload:theData
    }
}

export const removeFavourite=(id)=>{
    return{
        type:'REMOVE_FROM_FAVOURITE',
        payload:id
    }
}

//Now Booking Actions
export const addToBooking=(theData)=>{
    return {
        type:"ADD_TO_BOOKING",
        payload:theData
    }
}

export const removeBooking=(id)=>{
    return{
        type:'REMOVE_FROM_BOOKING',
        payload:id
    }
}