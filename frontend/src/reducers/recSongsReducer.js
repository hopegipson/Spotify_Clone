function recSongsReducer(state = null, action){
    switch(action.type){
        case "ADD_RECOMMENDED_SONGS":
            return [...state, action.songs]
        default:
            return state;
    }
}

export default recSongsReducer