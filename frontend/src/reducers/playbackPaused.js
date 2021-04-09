function playbackPausedReducer(state = false, action){
    switch(action.type){
        case "TURN_OFF_PAUSE":
            return [...state, action.playbackPaused]
        case "TURN_ON_PAUSE":
            return [...state, action.playbackPaused]
        default:
            return state;
    }
}

export default playbackPausedReducer