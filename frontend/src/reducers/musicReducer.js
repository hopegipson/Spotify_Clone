const musicReducer = (state = { songs: [], albums: [], artists: [],  loading: true, token: null, playbackOn: false, playbackPaused: false, recArtistsloading: false, recSongsloading: false, user: {display_name: "Still loading", spotifyid: "none"}, selectedPlaylist: "nothing", songMessage: false, searchTerm: "Recommended Songs"}, action) => {
    switch(action.type) {
      case 'LOADING_SPOTIFY_DATA':
        return {
          ...state,
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
      case 'ADD_SELECTED_PLAYLIST':
                  return{
                    ...state,
                    selectedPlaylist: action.playlist
                  }
      case 'ADD_RECOMMENDED_ARTISTS':
                    return{
                      ...state,
                      recArtistsloading: true,
                      recArtists: action.artists
                    }
      case 'LOADING_RECOMMENDED_ARTISTS':
              return{
                 ...state,
                 recArtistsloading: false,
                }
      case 'ADD_RECOMMENDED_SONGS':
                return{
                    ...state,
                    recSongsloading: true,
                    recSongs: action.songs
                  }
    case 'LOADING_RECOMMENDED_SONGS':
            return{
               ...state,
               recSongsloading: false,
              }
    case 'ADD_RECENTLY_PLAYED_SONGS':
              return{
                ...state,
                recPlayedloading: true,
                recPlayedSongs: action.songs
              }
      case 'LOADING_RECENT_SONGS':
        return{
            ...state,
            recPlayedloading: false
          }

        case 'CHANGE_FROM_TRACKER':
            return{
                ...state,
                changeFromTracker: action.changeFromTracker
              }

        case 'ADD_SEARCH_TERM':
          return{
              ...state,
              searchTerm: action.searchTerm
            }
      default:
        return state;
    }
  }
  
  export default musicReducer; 