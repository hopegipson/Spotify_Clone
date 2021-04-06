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
export function getUser(userID) {fetch(usersURL + `/${userID}`).then(parseJSON)}

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
  


 