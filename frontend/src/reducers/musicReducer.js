const musicReducer = (state = { songs: [], albums: [], artists: [], playingRecordingId: " ",  loading: true, token: null, playbackOn: false, playbackPaused: false, user: {display_name: "Still loading", spotifyid: "none"}}, action) => {
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

      case 'PLAYBACK_OFF':
              return{
                ...state,
                playbackOn: action.playbackOn
              }

      case 'TURN_OFF_PAUSE':
              return{
                ...state,
                playbackPaused: action.playbackPaused
              }

      case 'TURN_ON_PAUSE':
                return{
                  ...state,
                  playbackPaused: action.playbackPaused
                }
      case 'CHANGE_TRACKER_SONG':
                return{
                  ...state,
                  songPlaying: action.songPlaying
                }
      case 'ERASE_TRACKER_SONG':
                  return{
                    ...state,
                    songPlaying: undefined
                  }

       case 'ADD_SPOTIFY_USER':
                  return{
                   ...state,
                spotifyuser: action.spotifyuser
              }

      case 'ADD_USER':
                return{
                  ...state,
                  user: action.user
                }
      default:
        return state;
    }
  }
  
  export default musicReducer; 