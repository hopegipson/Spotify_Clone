function spotifyUserReducer(state = null, action){
    switch(action.type){
        case "ADD_SPOTIFY_USER":
            return action.spotifyuser
        default:
            return state;
    }
}

export default spotifyUserReducer