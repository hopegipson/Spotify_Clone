const URL = 'http://localhost:3000/'
const usersURL = URL + 'users'
const playlistsURL = URL + 'playlists'
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


export function getUser(userID) {fetch(usersURL + `/${userID}`).then(parseJSON)}
export function getPlaylist(playlistID) {fetch(playlistsURL + `/${playlistID}`).then(parseJSON)}
export function getSong(songID) {fetch(songsURL + `/${songID}`).then(parseJSON)}

export const postUser = (display_name, spotifyid) =>  {
  return (dispatch) => {
  return fetch(usersURL, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
        user_info: {
          display_name: display_name,
          spotifyid: spotifyid
        }
      })
  }).then(parseJSON).then((data) => {
    console.log(data)
     dispatch({type: 'ADD_USER', user: data })
   })
  }
  }

  export const postPlaylist = (user_id) =>  {
   return (dispatch) => {
    return fetch(playlistsURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
          playlist_info: {
            user_id: user_id
          }
        })
    }).then(parseJSON).then((data) => {
      console.log(data)
       dispatch({type: 'ADD_PLAYLIST', playlist: data })
     })
      }
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
              artist: song.artists[0].name,
              album: song.album.name,
              album_artwork: song.album.images[0].url,
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
                artist: song.artists[0].name,
                album: song.album.name,
                album_artwork: song.album.images[0].url,
                playlist_id: playlist_id,
                second_playlist_id: second_playlist_id
              }
            })
         }).then(parseJSON)}
        //song.name song.uri song.duration_ms 
        //song.artist[0].name song.album.name song.album.images[0].url

  export const addUserToState = (user) => {
    return {
      type: 'ADD_USER',
      user
    };
  };

  export const changeUser = (username, spotifyid, id) => {
      return fetch(usersURL +`/${id}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify({
            user_info: {
              display_name: username,
              spotifyid: spotifyid}
          })
      }).then(parseJSON)
      }

      export const changeSong = (id, playlist_id) => {
        return fetch(songsURL +`/${id}`, {
          method: 'PATCH',
          headers: headers,
          body: JSON.stringify({
             song_info: {
              playlist_id: playlist_id}
            })
        }).then(parseJSON)
        }
  


 