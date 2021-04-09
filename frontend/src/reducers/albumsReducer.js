function albumsReducer(state = [], action){
    switch(action.type){
        case "ADD_ALBUMS":
            return [...state, action.albums]
        default:
            return state;
    }
}

export default albumsReducer