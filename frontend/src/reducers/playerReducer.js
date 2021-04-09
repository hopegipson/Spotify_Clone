function playerReducer(state = null, action){
    switch(action.type){
        case "ADD_PLAYER":
            return [...state, action.player]
        default:
            return state;
    }
}

export default playerReducer