function artistsReducer(state = [], action){
    switch(action.type){
        case "ADD_ARTISTS":
            return [...state, action.artists]
        default:
            return state;
    }
}

export default artistsReducer