function recArtistsloadingReducer(state = false, action){
    switch(action.type){
        case "ADD_RECOMMENDED_ARTISTS":
            return state=true
        case "LOADING_RECOMMENDED_ARTISTS":
            return state=false
        default:
            return state;

    }
}

export default recArtistsloadingReducer