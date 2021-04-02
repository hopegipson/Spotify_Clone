 

 export const fetchSpotifyData = (term, token) => {

    return (dispatch) => {
        dispatch({ type: 'LOADING_SPOTIFY_DATA'})
       return fetch(`https://api.spotify.com/v1/search?query=${term}&type=album,playlist,artist,track`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then((response) => {
             return response.json().then(
                       (data) => {
                         console.log(data)
                        dispatch({type: 'ADD_ALBUMS', albums: data.albums.items})
                        dispatch({type: 'ADD_SONGS', songs: data.tracks.items})
                        dispatch({type: 'ADD_ARTISTS', artists: data.artists.items})
                        }
                   );
           });
         }
        }


        export const loadSpotifyScript = (callback) => {
          const existingScript = document.getElementById('spotify');
          if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://sdk.scdn.co/spotify-player.js';
            script.id = 'spotify';
            document.body.appendChild(script);
            script.onload = () => { 
              if (callback) callback();
            };
          }
          if (existingScript && callback) callback();
        };

        export const addPlayer = (player) => {
          return {
        
            type: 'ADD_PLAYER',
            player
          };
        };

        export const addDevice = (deviceID) => {
          return {
        
            type: 'ADD_DEVICE',
            deviceID
          };
        };


       export const startPlayback = (spotify_uri, deviceID, token) => {
        // (dispatch) => {
         return fetch("https://api.spotify.com/v1/me/player/play?" +
              "device_id=" + deviceID, {
              method: 'PUT',
              body: JSON.stringify({uris: [spotify_uri]}),
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              }
          // }).then(() => {
          //      dispatch({type: 'PLAYBACK_ON', playbackOn: true})
          //      dispatch({type: 'PLAYBACK_PAUSED', playbackPaused: false})
              
           })
      }
    //  }
      export const turnOnMusic = (playbackOn) => {
        return {
          type: 'PLAYBACK_ON',
          playbackOn
        };
      }

      export const turnOffMusic = (playbackOn) => {
        return {
          type: 'PLAYBACK_OFF',
          playbackOn
        };
      }

      export const turnOffPause = (playbackPaused) => {
        return {
          type: 'TURN_OFF_PAUSE',
          playbackPaused
        };
      }

      

      export const pauseTrack = ( deviceID, token) => {
       return fetch("https://api.spotify.com/v1/me/player/pause?" +
            "device_id=" + deviceID, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
         })
    }

 

    export const turnOnPause = (playbackPaused) => {
      return {
        type: 'TURN_ON_PAUSE',
        playbackPaused
      };
    }
