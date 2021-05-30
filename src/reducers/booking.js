let lastId = 0;
const bookingReducer = (state = [], action) => {
    if (action.type === "ADD_TO_BOOKING") {
        return [
            ...state,
            {
                id: ++lastId,
                name: action.payload.name,
                flyingFrom: action.payload.flyingFrom,
                flyingto: action.payload.flyingto,
                departure: action.payload.departure,
                arrival: action.payload.arrival,
                firstClass: action.payload.firstClass,
                economy: action.payload.economy,
                subTotal: action.payload.subTotal,
                vat: action.payload.vat,
                total: action.payload.total,
            }
        ]
    }
    else if (action.type === "REMOVE_FROM_BOOKING") {
        return state.filter(pd => pd.id !== action.payload.id);
    }
    else {
        return state;
    }
}

export default bookingReducer;
