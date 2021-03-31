const musicReducer = (state = { songs: [], albums: [], artists: [], playingRecordingId: " ",  loading: false, token: " " }, action) => {
    switch(action.type) {
      case 'LOADING_SPOTIFY_DATA':
        return {
          ...state,
         // cats: [...state.cats],
          loading: true
        }
      case 'ADD_SONGS':
        return {
          ...state,
          songs: action.songs,
          loading: false
        }
      case 'ADD_ARTISTS':
        return {
            ...state,
           artists: action.artists,
           loading: false
            }
      case 'SET_TOKEN':
          return{
            ...state,
            token: action.payload
          }
      case 'ADD_ALBUMS':
            return{
              ...state,
              albums: action.albums
            }
      default:
        return state;
    }
  }
  
  export default musicReducer; 