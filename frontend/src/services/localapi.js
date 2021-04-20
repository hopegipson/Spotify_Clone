const URL = 'http://localhost:3000/'
const usersURL = URL + 'users'
const playlistsURL = URL + 'playlists'
const PlaylistSongsURL = URL + "playlist_songs"
const songsURL = URL + 'songs'
const headers = {"Accepts":"application/json", "Content-Type": "application/json"}

const catchRes = response => response.json()


const parseJSON = response => {
    if (response.status === 200){
      return response.json()
    }
    else {
        catchRes(response).then(response => console.log(response.error))
    }
  }

 
export function getUsers() {return fetch(usersURL).then(parseJSON)}
export function getPlaylists() {return fetch(playlistsURL).then(parseJSON)}
export function getSongs() {return fetch(songsURL).then(parseJSON)}


export function getUser(userID) {return fetch(usersURL + `/${userID}`).then(parseJSON)}
export function getPlaylist(playlistID) {return fetch(playlistsURL + `/${playlistID}`).then(parseJSON)}
export function getSong(songID) {return fetch(songsURL + `/${songID}`).then(parseJSON)}

export const postUser = (display_name, spotifyid) =>  {
  return (dispatch) => {
  return fetch(usersURL, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
        user_info: {
          display_name: display_name,
          spotifyid: spotifyid
        }})
  }).then(parseJSON).then((data) => {
     dispatch({type: 'ADD_USER', user: data })
   })}}

   export const getUser = (userID) =>  {
    return (dispatch) => {
    return fetch(usersURL + `/${userID}`, {
      method: 'GET',
      headers: headers,
    }).then(parseJSON).then((data) => {
       dispatch({type: 'ADD_USER', user: data })
     })}}

  export const postPlaylist = (user_id) =>  {
    return fetch(playlistsURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
          playlist: {
            user_id: user_id} })
    }).then(parseJSON)
     }

  export const postSong = (song, playlist_id) =>  {
      return fetch(songsURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            song_info: {
              name: song.name,
              uri: song.uri,
              duration_ms: song.duration_ms,
              artists: song.artists,
              album: song.album,
              playlist_id: playlist_id
            }
          })
       }).then(parseJSON)}

    export const postSongWithTwo = (song, playlist_id, second_playlist_id) =>  {
        return fetch(songsURL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
              song_info: {
                name: song.name,
                uri: song.uri,
                duration_ms: song.duration_ms,
                artists: song.artists,
                album: song.album,
                playlist_id: playlist_id,
                second_playlist_id: second_playlist_id }})
         }).then(parseJSON)}

  export const addUserToState = (user) => {
    return {
      type: 'ADD_USER',
      user
    };
  };

  export const addSelectedPlaylist = (playlist) => {
    return {
      type: 'ADD_SELECTED_PLAYLIST',
      playlist
    };
  };

  export const changeUser = (username, spotifyid, id) => {
    return (dispatch) => {
      return fetch(usersURL +`/${id}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify({
            user_info: {
              display_name: username,
              spotifyid: spotifyid}
          })
      }).then(parseJSON).then((data) => {
         dispatch({type: 'ADD_USER', user: data })
       })}}


      export const changeSong = (id, playlist_id) => {
        return fetch(songsURL +`/${id}`, {
          method: 'PATCH',
          headers: headers,
          body: JSON.stringify({
             song_info: {
              playlist_id: playlist_id}
            })
        }).then(parseJSON)}

      export const changeSongPlaylists = (id, remove_playlist_id) => {
        return fetch(songsURL +`/${id}`, {
          method: 'PATCH',
          headers: headers,
          body: JSON.stringify({
              song_info: {
              remove_playlist_id: remove_playlist_id}
            })
        }).then(parseJSON)}

        export const deleteSong = (id) => {
          return fetch(songsURL +`/${id}`, {
            method: 'DELETE',
            headers: headers,
            
          }).then(parseJSON)}

          export const deletePlaylistSong = (id) => {
            return fetch(PlaylistSongsURL +`/${id}`, {
              method: 'DELETE',
              headers: headers,
              
            }).then(parseJSON)}

          export const deletePlaylist = (id) => {
            return fetch(playlistsURL +`/${id}`, {
              method: 'DELETE',
              headers: headers,
              
            }).then(parseJSON)}

        export const updatePlaylist = (newName, image, id) => {
          return fetch(playlistsURL +`/${id}`, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify({
                playlist: {
                  name: newName,
                  image: image
                }
              })
          }).then(parseJSON)
          }



       
  


 