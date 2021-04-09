function deviceReducer(state = null, action){
    switch(action.type){
        case "ADD_DEVICE":
            return [...state, action.deviceID]
        default:
            return state;
    }
}

export default deviceReducer