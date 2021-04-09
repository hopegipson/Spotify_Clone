function playlistsReducer(state = [], action){
    switch(action.type){
        case "ADD_PLAYLIST":
            return [...state, action.playlist]
        default:
            return state;
    }
}

export default playlistsReducer