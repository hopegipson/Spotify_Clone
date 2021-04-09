function songsReducer(state = [], action){
    switch(action.type){
        case "ADD_SONGS":
            return [...state, action.songs]
        default:
            return state;
    }
}

export default songsReducer