function userReducer(state = {display_name: "Still loading", spotifyid: "none"}, action){
    switch(action.type){
        case "ADD_USER":
            return action.user
       // case "ADD_PLAYLIST":
       //     return [...state, playlists:{...state.user.playlists, action.playlist}]
        default:
            return state;
    }
}

export default userReducer