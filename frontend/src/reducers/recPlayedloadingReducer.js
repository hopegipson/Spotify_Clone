function recPlayedloadingReducer(state = false, action){
    switch(action.type){
        case "ADD_RECENTLY_PLAYED_SONGS":
            return state=true
        case "LOADING_RECENT_SONGS":
            return state=false
        default:
            return state;

    }
}

export default recPlayedloadingReducer