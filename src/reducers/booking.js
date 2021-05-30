let lastId = 0;
const bookingReducer = (state = [], action) => {
    if (action.type === "ADD_TO_BOOKING") {
        return [
            ...state,
            {
                id: ++lastId,
                name: action.payload.name,
                from: action.payload.from,
                to: action.payload.to,
                depDate: action.payload.depDate,
                arrriDate: action.payload.arrriDate,
                fastClassPrice: 300,
                fastClassQnty: action.payload.fastClassQnty,
                fastClassPType:  action.payload.fastClassPType,
                economyClassPrice: 250,
                economyQnty:  action.payload.economyQnty,
                economyClassPType:  action.payload.economyClassPType
            }
        ]
    }
    else if(action.type === "REMOVE_FROM_BOOKING"){
        return state.filter(pd=>pd.id !== action.payload.id);
    }
    else {
        return state;
    }
}

export default bookingReducer;
