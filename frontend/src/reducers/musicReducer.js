const musicReducer = (state = { songs: [], albums: [], artists: [], playingRecordingId: " ",  loading: true, token: null, playbackOn: false, playbackPaused: false }, action) => {
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
              albums: action.albums,
              loading: false
            }
    
      case 'ADD_PLAYER':
            return{
              ...state,
              player: action.player
              }

      case 'ADD_DEVICE':
            return{
              ...state,
            deviceID: action.deviceID
         }
      case 'PLAYBACK_ON':
            return{
              ...state,
              playbackOn: action.playbackOn
            }

      case 'TURN_OFF_PAUSE':
              return{
                ...state,
                playbackPaused: action.playbackPaused
              }
      default:
        return state;
    }
  }
  
  export default musicReducer; 