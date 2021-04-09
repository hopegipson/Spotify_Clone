function recPlayedSongsReducer(state = [], action){
    switch(action.type){
        case "ADD_RECENTLY_PLAYED_SONGS":
            return [...state, action.songs]
        default:
            return state;
    }
}

export default recPlayedSongsReducer