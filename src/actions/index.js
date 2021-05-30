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