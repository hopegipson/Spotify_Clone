function tokenReducer(state = null, action){
    switch(action.type){
        case "SET_TOKEN":
            return action.payload
        default:
            return state;
    }
}

export default tokenReducer