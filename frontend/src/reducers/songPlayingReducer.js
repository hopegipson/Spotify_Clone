function songPlayingReducer(state = null, action){
    switch(action.type){
        case "CHANGE_TRACKER_SONG":
            return [...state, action.songPlaying]
        case "ERASE_TRACKER_SONG":
            return [...state, null]
        default:
            return state;

    }
}

export default songPlayingReducer