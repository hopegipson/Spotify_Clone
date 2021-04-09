function recSongsloadingReducer(state = false, action){
    switch(action.type){
        case "ADD_RECOMMENDED_SONGS":
            return state=true
        case "LOADING_RECOMMENDED_SONGS":
            return state=false
        default:
            return state;

    }
}

export default recSongsloadingReducer