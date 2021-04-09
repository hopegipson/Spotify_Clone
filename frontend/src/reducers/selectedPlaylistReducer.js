function selectedPlaylistReducer(state = null, action){
    switch(action.type){
        case "ADD_SELECTED_PLAYLIST":
            return  action.playlist
        default:
            return state;
    }
}

export default selectedPlaylistReducer