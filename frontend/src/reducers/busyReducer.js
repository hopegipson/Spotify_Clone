function busyReducer(state = false, action){
    switch(action.type){
        case "LOADING_SPOTIFY_DATA":
            return true
        case "ADD_SONGS":
            return false
        case "ADD_ARTISTS":
            return false
        case "ADD_ALBUMS":
            return false
        default:
            return state;
    }
}

export default busyReducer