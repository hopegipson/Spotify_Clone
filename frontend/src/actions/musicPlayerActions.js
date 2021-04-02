 

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
