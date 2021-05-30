const favouriteReducer=(state=[],action)=>{
    if(action.type==="ADD_TO_FAVOURITE"){
        console.log('added');
        return [
            ...state,
            action.payload
            
        ]
    }
    else if(action.type==="REMOVE_FROM_FAVOURITE"){
        console.log('Hello');
        return state.filter(fav=>fav.id !== action.payload.id)
    }
    else{
        return state;
    }
}

export default favouriteReducer;