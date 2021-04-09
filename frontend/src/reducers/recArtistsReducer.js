function recArtistsReducer(state = [], action){
    switch(action.type){
        case "ADD_RECOMMENDED_ARTISTS":
            return [...state, action.artists]
        default:
            return state;
    }
}

export default recArtistsReducer