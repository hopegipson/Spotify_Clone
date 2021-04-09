function playbackOnReducer(state = false, action){
    switch(action.type){
        case "PLAYBACK_ON":
            return [...state, action.playbackOn]
        case "PLAYBACK_OFF":
            return [...state, action.playbackOn]
        default:
            return state;
    }
}

export default playbackOnReducer