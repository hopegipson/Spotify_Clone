const parseJSON = res => res.json()
const SPOTIFYURL = 'https://api.spotify.com/v1/me'
const TOPARTISTSURL = 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=20&offset=0'
const TOPSONGSURL = 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=20&offset=0'

const PLAYERURL = `https://api.spotify.com/v1/me/player`
const RECENTLYPLAYEDURL = 'https://api.spotify.com/v1/me/player/recently-played?limit=10&'
//after=1484811043508
const STARTPLAYBACKURL = "https://api.spotify.com/v1/me/player/play?"
const PAUSEURL = "https://api.spotify.com/v1/me/player/pause?"

 export const fetchSpotifyData = (term, token) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_SPOTIFY_DATA'}) 
       return fetch(`https://api.spotify.com/v1/search?query=${term}&type=album,playlist,artist,track&limit=50`, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }}).then(parseJSON).then((data) => {
                        dispatch({type: 'ADD_ALBUMS', albums: data.albums.items})
                        dispatch({type: 'ADD_SONGS', songs: data.tracks.items})
                        dispatch({type: 'ADD_ARTISTS', artists: data.artists.items})
                        })}}

  export const fetchSpotifyUserArtists = (token) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_RECOMMENDED_ARTISTS'})
        return fetch(TOPARTISTSURL, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
        }}).then(parseJSON).then((data) => {
                        dispatch({type: 'ADD_RECOMMENDED_ARTISTS', artists  : data.items})
                        })}}

  export const fetchSpotifyUserSongs = (token) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_RECOMMENDED_SONGS'})
        return fetch(TOPSONGSURL, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }}).then(parseJSON).then((data) => {
              dispatch({type: 'ADD_RECOMMENDED_SONGS', songs: data.items})
              })}}


  export const fetchRecentlyPlayedUserSongs = (token) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_RECENT_SONGS'})
        return fetch(RECENTLYPLAYEDURL, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }}).then(parseJSON).then((data) => {
              dispatch({type: 'ADD_RECENTLY_PLAYED_SONGS', songs: data.items})
              })}}


  export const fetchUserData = (token) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_SPOTIFY_DATA'})
        return fetch(SPOTIFYURL, {
            method: 'GET', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }}).then(parseJSON).then((data) => {
              dispatch({type: 'ADD_SPOTIFY_USER', spotifyuser: data})
              })}}

  export const startPlayback = (spotify_uri, deviceID, token) => {

    return (dispatch) => {
    return fetch(STARTPLAYBACKURL +
          "device_id=" + deviceID, {
          method: 'PUT',
          body: JSON.stringify({uris: [spotify_uri]}),
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          }}).then((
            dispatch({type: 'PLAYBACK_ON', playbackOn: true}),
            dispatch({type: 'TURN_OFF_PAUSE', playbackPaused: false})
          ))}}

  export const resumePlayback = (deviceID, token) => {
    return (dispatch) => {
    return fetch(STARTPLAYBACKURL +
          "device_id=" + deviceID, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          }}).then((
            dispatch({type: 'PLAYBACK_ON', playbackOn: true}),
            dispatch({type: 'TURN_OFF_PAUSE', playbackPaused: false})
            ))}}


  export const getCurrentlyPlaying = (token) => {
    return fetch(PLAYERURL, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          }}).then(parseJSON)}

  export const pauseTrack = ( deviceID, token) => {
    return (dispatch) => {
    return fetch(PAUSEURL +
          "device_id=" + deviceID, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          }}).then((
            dispatch({type: 'PLAYBACK_OFF', playbackOn: false}),
            dispatch({type: 'TURN_ON_PAUSE', playbackPaused: true})
            ))}}

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

    export const changeTrackerSong = (songPlaying) => {
      return {
        type: 'CHANGE_TRACKER_SONG',
        songPlaying
      };
    }

    export const eraseTrackerSong = () => {
      return {
        type: 'ERASE_TRACKER_SONG'
      };
    }

    export const changeFromTracker = (changeFromTracker) => {
      return {
        type: 'CHANGE_FROM_TRACKER',
        changeFromTracker
      };
    }

    export const addSearchTerm = (searchTerm) => {
      return {
        type: 'ADD_SEARCH_TERM',
        searchTerm
      };
    }


