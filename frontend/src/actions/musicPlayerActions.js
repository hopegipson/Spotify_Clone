 

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
               //   console.log(response.json().then(
             return response.json().then(
                       (data) => {
                        dispatch({type: 'ADD_ALBUMS', albums: data.albums.items})
                        dispatch({type: 'ADD_SONGS', songs: data.tracks.items})
                        dispatch({type: 'ADD_ARTISTS', artists: data.artists.items})
                        }
                   );
           });
         }
        }